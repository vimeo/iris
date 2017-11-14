// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './TabContentPanel.scss';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

const displayName = 'TabContentPanel';
const panelSpeed = parseInt(styles.Panel_AnimationTime, 10);

type Props = {
    activeTabIndex: number,
    className?: string,
    panels: Array<{
        tabId: string,
        content: React$Element<*>
    }>,
};

class TabContentPanel extends React.Component {

    props: Props;

    render() {
        const {
            activeTabIndex,
            className,
            panels,
            ...filteredProps
        } = this.props;

        // className builder
        const componentClass = classNames(
            styles.TabContentPanel,
            className
        );

        const panelsContent = panels.map((key, i) => {
            const thisPanel = panels[i];
            return (
                <div id={thisPanel.tabId} aria-labelledby={`tab-${thisPanel.tabId}`} key={i}>
                    {thisPanel.content}
                </div>
            );
        });
        return (
                <div
                    {...filteredProps}
                    className={componentClass}
                >
                    <ReactCSSTransitionReplace
                        transitionEnterTimeout={panelSpeed}
                        transitionLeaveTimeout={panelSpeed}
                        transitionName={styles}
                    >
                        {panelsContent[activeTabIndex]}
                    </ReactCSSTransitionReplace>
                </div>
        );

    }
}

TabContentPanel.displayName = displayName;

export default TabContentPanel;
