// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './VerticalMenuNested.scss';
import SlideUpDown from '../../animations/SlideUpDown/SlideUpDown';
import VerticalMenuNestedSubMenu from '../VerticalMenuNestedSubMenu/VerticalMenuNestedSubMenu';
import VerticalMenuItem from '../VerticalMenuItem/VerticalMenuItem';

const displayName = 'VerticalMenuNested';

type Props = {
    className?: string,
    isOpen?: Boolean,
    label: string,
    labelIcon?: React$Element<*>,
    labelIconTheme?: 'default' | 'subtle',
    labelId: string,
    isOpen: boolean,
    nestedButtonLabel?: string,
    onClick?: Function,
    onOpen?: Function,
    onClose?: Function,
    selectedItemIndex?: number;
    subMenuItems: Array<React$Element<'VerticalMenuItem' | 'VerticalMenuItem'>>,
    to: string,
};

class VerticalMenuNested extends React.Component {
    constructor(props: Props) {
        super(props);
        this.state = {
            subMenuOpen: props.isOpen || false,
            selectedItemIndex: props.selectedItemIndex || 0,
        };
    }

    state: Object;

    componentDidUpdate = (prevProps: Object, prevState: Object) => {

        // Open and Close SubMenu based on isOpen prop
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

    _handleLinkClick = (e: Event) => {
        // links are only followed if the "to" value has been defined otherwise they just toggle the menu
        if (!this.props.to || this.props.to === '#') {
            e.preventDefault();
            this._toggleMenu();
        }

        if (typeof this.props.onClick === 'function') {
            this.props.onClick();
        }

    };

    _handleToggleClick = (e: Event) => {
        e.preventDefault();
        this._toggleMenu();
    }

    _toggleMenu = () => {
        this.setState({
            subMenuOpen: !this.state.subMenuOpen,
        });
    }

    _onIndexChange = (index: number) => {
        this.setState({
            selectedItemIndex: index,
        });
    }

    render() {
        const {
            className,
            label,
            labelIcon,
            labelId,
            labelIconTheme = 'default',
            isOpen, // eslint-disable-line no-unused-vars
            nestedButtonLabel = 'toggle sub-menu',
            subMenuItems,
            onClick, // eslint-disable-line no-unused-vars
            onClose, // eslint-disable-line no-unused-vars
            onOpen, // eslint-disable-line no-unused-vars
            selectedItemIndex, // eslint-disable-line no-unused-vars
            to,
            ...filteredProps
        } = this.props;

        // className builder
        const componentClass = classNames(
            styles.VerticalMenuNested,
            className
        );

        const iconClass = classNames(
            styles.ArrowIcon,
            (this.state.subMenuOpen ? styles.isOpen : null),
        );

        return (
                <div
                    {...filteredProps}
                    className={componentClass}
                >
                    <VerticalMenuItem
                        hasSubMenu
                        id={labelId}
                        label={label}
                        labelIcon={labelIcon}
                        labelIconTheme={labelIconTheme}
                        to={to}
                        aria-haspopup = "true"
                        aria-expanded = {this.state.subMenuOpen ? 'true' : 'false'}
                        onClick={this._handleLinkClick}
                        onNestedItemClick={this._handleToggleClick}
                        nestedButtonClass={iconClass}
                        nestedButtonLabel={nestedButtonLabel}
                    />
                    <SlideUpDown
                        animateOpenOnMount={false}
                        isHidden={!this.state.subMenuOpen}
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
