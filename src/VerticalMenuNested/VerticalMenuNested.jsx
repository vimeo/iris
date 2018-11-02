// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './VerticalMenuNested.scss';
import SlideUpDown from '../SlideUpDown/SlideUpDown';
import { VerticalMenuToggleButton } from '../VerticalMenuToggleButton';
// $FlowFixMe
import VerticalMenuItemContent from '../VerticalMenuItemContent';
import VerticalMenuItem from '../VerticalMenuItem';
import VerticalMenuNestedSubMenu from '../VerticalMenuNestedSubMenu/VerticalMenuNestedSubMenu';

type Props = {
    actionButton?: React$Element<*>,
    className?: string,
    isActive?: boolean,
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
    render: Function,
    subMenuItems: Array<React$Element<'VerticalMenuItem'>>,
    href?: string,
    to?: string,
};

type State = {
    subMenuOpen: boolean,
};

class VerticalMenuNested extends React.Component {
    constructor(props: Props) {
        super(props);
        this.state = {
            subMenuOpen: props.isOpen || false,
        };
    }

    state: State;

    componentWillUpdate = (nextProps: Props, nextState: State) => {
        // Open and Close SubMenu based on isOpen prop

        if (nextProps.isOpen !== this.props.isOpen) {
            if (nextProps.isOpen) {
                this.setState({
                    subMenuOpen: true,
                });
            }
            else {
                this.setState({
                    subMenuOpen: false,
                });
            }
        }
    };

    componentDidUpdate(prevProps: Props, prevState: State) {
        if (prevState.subMenuOpen !== this.state.subMenuOpen) {
            if (
                this.state.subMenuOpen &&
                typeof this.props.onOpen === 'function'
            ) {
                this.props.onOpen();
            }
            else if (
                !this.state.subMenuOpen &&
                typeof this.props.onClose === 'function'
            ) {
                this.props.onClose();
            }
        }
    }

    props: Props;

    _handleLinkClick = (e: Event) => {
        // links are only followed if the "to"  or 'href values have been defined and are not "#" otherwise they just toggle the menu

        let suppressLinkFollow = false;

        if (!this.props.href && !this.props.to) {
            suppressLinkFollow = true;
        }
        else if (this.props.href === '#' || this.props.to === '#') {
            suppressLinkFollow = true;
        }

        if (suppressLinkFollow) {
            e.preventDefault();
            this._toggleMenu();
        }

        // either way we fire the onClick function passed to the prop

        if (typeof this.props.onClick === 'function') {
            this.props.onClick(e);
        }
    };

    _handleToggleClick = (e: Event) => {
        e.preventDefault();
        this._toggleMenu();
    };

    _toggleMenu = () => {
        this.setState({
            subMenuOpen: !this.state.subMenuOpen,
        });
    };

    render() {
        const {
            actionButton,
            className,
            label,
            labelIcon,
            labelId,
            labelIconTheme = 'default',
            isActive,
            isOpen, // eslint-disable-line no-unused-vars
            nestedButtonLabel = 'toggle sub-menu',
            render,
            subMenuItems,
            onClick, // eslint-disable-line no-unused-vars
            onClose, // eslint-disable-line no-unused-vars
            onOpen, // eslint-disable-line
            ...filteredProps
        } = this.props;

        // className builder
        const componentClass = classNames(styles.VerticalMenuNested, className);

        const subMenuToggleClass = classNames(
            styles.SubMenuToggle,
            this.state.subMenuOpen ? styles.isOpen : null
        );

        const AnchorTag = props => {
            return <a {...props} />;
        };

        const WrappedComponent = render || AnchorTag;

        return (
            <div className={componentClass}>
                <div className={subMenuToggleClass}>
                    <VerticalMenuToggleButton
                        label={nestedButtonLabel}
                        onClick={this._handleToggleClick}
                    />
                </div>
                {actionButton && (
                    <div className={styles.ActionButtonWrapper}>
                        {actionButton}
                    </div>
                )}
                <VerticalMenuItem
                    id={labelId}
                    isActive={isActive}
                    hasRightSideContent={actionButton ? true : false}
                >
                    <WrappedComponent
                        {...filteredProps}
                        aria-haspopup="true"
                        aria-expanded={
                            this.state.subMenuOpen ? 'true' : 'false'
                        }
                        onClick={this._handleLinkClick}
                        children={
                            <VerticalMenuItemContent
                                hasSubMenu
                                isActive={isActive}
                                label={label}
                                labelIcon={labelIcon}
                                labelIconTheme={labelIconTheme}
                            />
                        }
                    />
                </VerticalMenuItem>
                <SlideUpDown isHidden={!this.state.subMenuOpen}>
                    <div className={styles.SubMenuWrapper}>
                        <VerticalMenuNestedSubMenu
                            labeledById={labelId}
                            subMenuItems={subMenuItems}
                        />
                    </div>
                </SlideUpDown>
            </div>
        );
    }
}

export default VerticalMenuNested;
