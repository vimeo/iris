// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './TabNavigationHorizontal.scss';
import TabNavigationHorizontalItem from '../TabNavigationHorizontalItem/TabNavigationHorizontalItem';
import TabContentPanel from '../TabContentPanel/TabContentPanel';

import anime from 'animejs';

const displayName = 'TabNavigationHorizontal';

type Props = {
    activeTabIndex: number,
    className?: string,
    panels: Array<{
        tabId: string,
        label: string,
        content: React$Element<*>,
        onClick: Function,
    }>,
};

class TabNavigationHorizontal extends React.Component {
    static defaultProps = {
        activeTabIndex: 0,
    };

    constructor(props: Props) {
        super(props);
        this.tabWidth = this._getTabWidth();
        this.state = {
            activeTabIndex: props.activeTabIndex < props.panels.length
            ? props.activeTabIndex : 0,
            navIndicatorPosition: 0,
        };
    }

    state: Object;

    componentDidMount() {
        this._setTabIndicatorPosition(0, true);
    }

    componentDidUpdate(prevProps: Object, prevState: Object) {
        if (prevState.activeTabIndex !== this.state.activeTabIndex) {
            this._setTabIndicatorPosition(prevState.navIndicatorPosition);
        }
    }

    NavIndicator: any;
    props: Props;
    tabWidth: number;

    _animateSlider = (start: number, end: number) => {
        const el = this.NavIndicator;

        if (el instanceof HTMLElement) {
            anime({
                targets: [el],
                delay: 50,
                duration: 150,
                easing: 'easeInQuart',
                translateX: [`${start}%`, `${end}%`],
            });
        }
    }

    _getTabWidth = () => {
        const tabCount = this.props.panels.length;
        if (tabCount) {
            return 100 / tabCount;
        }

        return 0;

    }

    _setTabIndicatorPosition = (previousPosition: number, isFirstMount?: boolean) => {
        const newPosition = this.state.activeTabIndex * 100;
        this.setState({
            navIndicatorPosition: newPosition,
        });

        if (isFirstMount) {
            this.NavIndicator.style.transform = `translateX(${newPosition}%)`;
        }
        else if (previousPosition !== newPosition) {
            this._animateSlider(previousPosition, newPosition);
        }
    }

    render() {

        const {
            activeTabIndex, // eslint-disable-line no-unused-vars
            className,
            panels,
            ...filteredProps
        } = this.props;


        const panelContentFiltered = panels.map((key, i) => {
            return (
            {
                tabId: key.tabId,
                content: key.content,
            }
            );
        });


        const tabButtonList = panels.map((key, i) => {
            const isSelected = this.state.activeTabIndex === i;

            const {
                content, // eslint-disable-line no-unused-vars
                onClick,
                ...noContent
            } = key;

            const onClickHandler = (e: Event) => {
                this.setState({
                    activeTabIndex: i,
                });

                if (typeof onClick === 'function') {
                    onClick();
                }
            };

            return (
                <TabNavigationHorizontalItem
                    {...noContent}
                    key={`TabNavigationHorizontalItem-${i}`}
                    isSelected={isSelected}
                    handleTabChange={onClickHandler}
                />
            );

        });

        // className builder
        const componentClass = classNames(
            styles.TabNavigationHorizontal,
            className
        );

        return (
                <div
                    {...filteredProps}
                    className={componentClass}
                >
                    <ul
                        className={styles.NavWrapper}
                    >
                        {tabButtonList}
                    </ul>
                    <div className={styles.NavIndicatorBar}>
                        <div
                            className={styles.NavIndicator}
                            style={{
                                width: `${this.tabWidth}%`,
                            }}
                            ref={(NavIndicator) => {
                                this.NavIndicator = NavIndicator;
                            }}
                        />
                    </div>
                    <TabContentPanel
                        panels={panelContentFiltered}
                        activeTabIndex = {this.state.activeTabIndex}
                    />
                </div>
        );

    }
}

TabNavigationHorizontal.displayName = displayName;

export default TabNavigationHorizontal;
