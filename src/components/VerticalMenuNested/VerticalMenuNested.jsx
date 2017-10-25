// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './VerticalMenuNested.scss';
import SlideUpDown from '../../animations/SlideUpDown/SlideUpDown';
import RightChevron from '../../globals/svg/chevron-right.svg';
import VerticalMenuNestedSubMenu from '../VerticalMenuNestedSubMenu/VerticalMenuNestedSubMenu';
import VerticalMenuItem from '../VerticalMenuItem/VerticalMenuItem';

const displayName = 'VerticalMenuNested';

type Props = {
    className?: string,
    isOpen?: Boolean,
    label: string,
    labelIcon?: React$Element<*>,
    labelId: string,
    onClick?: Function,
    onOpen?: Function,
    onClose?: Function,
    selectedItemIndex?: number;
    subMenuItems: Array<React$Element<'VerticalMenuItem' | 'VerticalMenuItemReactRouter'>>,
};

class VerticalMenuNested extends React.Component {

    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: props.isOpen,
            selectedItemIndex: props.selectedItemIndex || 0,
        };
    }

    state: Object;

    componentDidUpdate = (prevProps: Object, prevState: Object) => {

        // Open and Close SubMenu based on state
        if (!prevState.isOpen && this.state.isOpen) {
            if (typeof this.props.onOpen === 'function') {
                this.props.onOpen();
            }
        }
        else if (prevState.isOpen && !this.state.isOpen && typeof this.props.onClose === 'function') {
            this.props.onClose();
        }

    }

    props: Props;
    activeIndicator: HTMLElement;

    _handleClick = (e: Event) => {
        e.preventDefault();

        if (typeof this.props.onClick === 'function') {
            this.props.onClick();
        }

        this._toggleMenu();
    };

    _onIndexChange = (index: number) => {
        this.setState({
            selectedItemIndex: index,
        });
    }

    _toggleMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }


    render() {
        const {
            className,
            isOpen, // eslint-disable-line no-unused-vars
            label,
            labelIcon,
            labelId,
            subMenuItems,
            onClick, // eslint-disable-line no-unused-vars
            onClose, // eslint-disable-line no-unused-vars
            onOpen, // eslint-disable-line no-unused-vars
            selectedItemIndex, // eslint-disable-line no-unused-vars
            ...filteredProps
        } = this.props;

        // className builder
        const componentClass = classNames(
            styles.VerticalMenuNested,
            className
        );

        const iconClass = classNames(
            styles.ArrowIcon,
            (this.state.isOpen ? styles.isOpen : null),
        );
        const linkActionIcon = <RightChevron className={iconClass} />;
        return (
                <div
                    {...filteredProps}
                    className={componentClass}
                >
                    <VerticalMenuItem
                        id={labelId}
                        label={label}
                        labelIcon={labelIcon}
                        linkActionIcon={linkActionIcon}
                        href="#"
                        aria-haspopup = "true"
                        aria-expanded = {this.state.isOpen ? 'true' : 'false'}
                        onClick={this._handleClick}
                    />
                    <SlideUpDown
                        animateOpenOnMount={false}
                        isHidden={!this.state.isOpen}
                        speed={300}
                    >
                        <div
                            className={styles.SubMenuWrapper}
                        >
                            <VerticalMenuNestedSubMenu
                                labeledById={labelId}
                                subMenuItems={subMenuItems}
                                onIndexChange={this._onIndexChange}
                                selectedItemIndex={this.state.selectedItemIndex}
                            />
                        </div>
                    </SlideUpDown>
                </div>
        );
    }
}

VerticalMenuNested.displayName = displayName;

export default VerticalMenuNested;
