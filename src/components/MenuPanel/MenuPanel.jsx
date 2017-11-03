// @flow

import React from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import styles from './MenuPanel.scss';
import TetherComponent from 'react-tether';
import KEY_CODES from '../../globals/js/constants/KEY_CODES';
import { CSSTransitionGroup } from 'react-transition-group';

const displayName = 'MenuPanel';

// this is defined in the MenuPanel.scss file
const menuSpeed = parseInt(styles.MenuPanel_AnimationTime, 10);

type Props = {
    alignment?: 'left' | 'right' | 'center',
    className?: string,
    children: React$Element <*>,
    href?: string,
    isShowing?: boolean,
    menuContent: React$Element <*>,
    onClose?: Function,
    onClick?: Function,
    onOpen?: Function,
    size: 'sm' | 'md' | 'lg',
    options?: Object,
    isFluid?: boolean,
};

class MenuPanel extends React.Component {
    static defaultProps = {
        alignment: 'center',
        href: '#',
        size: 'md',
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            isShowing: props.isShowing,
        };
    }
    state: Object;

    componentDidMount() {
        if (this.state.isShowing) {
            this._openMenu();
        }
    }

    componentWillReceiveProps(nextProps: Object) {
        if (nextProps.isShowing !== this.props.isShowing && nextProps.isShowing !== this.state.isShowing) {
            this.setState({
                isShowing: nextProps.isShowing,
            });
        }
    }

    componentDidUpdate(prevProps: Object, prevState: Object) {
        if (!prevState.isShowing && this.state.isShowing) {
            this._openMenu();
        }
        else if (prevState.isShowing && !this.state.isShowing) {
            this._closeMenu();
        }
    }

    props: Props;
    firstFocusableElement: HTMLElement;
    lastFocusableElement: HTMLElement;
    menu: HTMLElement;
    menuId: string;
    menuTriggerEl: HTMLElement;
    tether: any;


    _handleClick = (e: Event) => {
        this._toggleClick();
        if (this.props.href === '#') {
            e.preventDefault();
        }

        if (typeof this.props.onClick === 'function') {
            this.props.onClick();
        }
    }

    _handleClickWhileOpen = (e: Event) => {
        if (this.state.isShowing && e.target instanceof HTMLElement && !this.menu.contains(e.target)) {
            this.setState({
                isShowing: false,
            });
        }
    }

    _handleEsc = (e: Event) => {
        if (this.state.isShowing && e.keyCode === KEY_CODES.esc) {
            this.setState({
                isShowing: false,
            });
        }
    }

    _handleForwardFocusTab= (e: Event) => {
        if (e.keyCode === KEY_CODES.tab) {
            this.setState({
                isShowing: false,
            });
            e.preventDefault();
        }
    }

    // when the menu is open, a forward tab should go to the first menu item
    _handleForwardsTriggerTab = (e: Event) => {
        if (e.keyCode === KEY_CODES.tab && this.state.isShowing && this.firstFocusableElement) {
            e.preventDefault();
            this._unbindTriggerTab();
            this.firstFocusableElement.focus();
        }
    }

    // tabbing backwards out of the menu closes it.
    _handleBackwardFocusTab = (e: Event) => {
        // shift + tab
        if (e.shiftKey && e.keyCode === KEY_CODES.tab) {
            this.setState({
                isShowing: false,
            });
            e.preventDefault();
        }
    }


    _bindEvents = () => {
        document.addEventListener(
            'click',
            this._handleClickWhileOpen
        );

        document.addEventListener(
            'keydown',
            this._handleEsc
        );

        if (this.lastFocusableElement && this.firstFocusableElement) {
            this.lastFocusableElement.addEventListener(
                'keydown',
                this._handleForwardFocusTab
            );

            this.firstFocusableElement.addEventListener(
                'keydown',
                this._handleBackwardFocusTab
            );
        }
    }

    _unBindEvents = () => {
        document.removeEventListener(
            'click',
            this._handleClickWhileOpen
        );

        document.removeEventListener(
            'keydown',
            this._handleEsc
        );

        this.lastFocusableElement.removeEventListener(
            'keydown',
            this._handleForwardFocusTab
        );

        this.firstFocusableElement.removeEventListener(
            'keydown',
            this._handleBackwardFocusTab
        );
    }

    _bindTriggerTab = () => {
        document.addEventListener(
            'keydown',
            this._handleForwardsTriggerTab
        );
    }

    _unbindTriggerTab = () => {
        document.removeEventListener(
            'keydown',
            this._handleForwardsTriggerTab
        );
    }

    _closeMenu = () => {
        this._unBindEvents();
        this.menuTriggerEl.focus();
        if (typeof this.props.onClose === 'function') {
            this.props.onClose();
        }
    }

    _openMenu = () => {
        this._setFocusableElementList(this._bindEvents);
        this.tether.enable();
        this.tether.position();
        if (typeof this.props.onOpen === 'function') {
            this.props.onOpen();
        }
    }

    _toggleClick = () => {
        this.setState({ isShowing: !this.state.isShowing });
    }

    _setFocusableElementList(callback: any) {
        const thisMenu = findDOMNode(this.menu);

        if (thisMenu instanceof Element) {
            const focusableList = thisMenu.querySelectorAll(
                'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
            );

            if (focusableList.length) {
                this.firstFocusableElement = Array.prototype.slice.call(focusableList)[0];

                this.lastFocusableElement = Array.prototype.slice.call(focusableList)[focusableList.length - 1];
            }
        }
        if (typeof callback === 'function') {
            callback();
        }

    }

    render() {
        const {
            alignment = 'center',
            children,
            className,
            href,
            isFluid,
            isShowing, // eslint-disable-line no-unused-vars
            menuContent,
            onClick, // eslint-disable-line no-unused-vars
            onClose, // eslint-disable-line no-unused-vars
            onOpen, // eslint-disable-line no-unused-vars
            size,
            ...filteredProps
        } = this.props;

        // className builder
        const componentClass = classNames(
            styles.MenuPanel,
            styles[size],
            (this.state.isShowing ? styles.isShowing : null),
        );

        const triggerClass = classNames(
            styles.MenuTrigger,
            (isFluid ? styles.isFluid : null),
            className,
        );

        const wrapperClass = classNames(
            styles.MenuPanelWrapper,
            (isFluid ? styles.isFluid : null),
        );

        const menuElement = (
            <div>
                <CSSTransitionGroup
                    transitionAppear
                    transitionEnterTimeout={0} // need this to prevent console warning
                    transitionLeaveTimeout={0} // need this to prevent console warning
                    transitionAppearTimeout={menuSpeed}
                    transitionName={{
                        appear: styles.appear,
                        appearActive: styles.appearActive,
                    }}
                >
                    {this.state.isShowing ? (
                        <div
                            className={componentClass}
                            ref={(menu) => {
                                this.menu = menu;
                            }}
                        >
                            {menuContent}
                        </div>
                    ) : null}
                </CSSTransitionGroup>
            </div>
        );

        return (
            <div className={wrapperClass}>
                <TetherComponent
                    attachment={`top ${alignment}`}
                    targetAttachment={`bottom ${alignment}`}
                    className={styles.MenuPanelTetherWrapper}
                    constraints={[{
                        to: 'window',
                        attachment: 'together',
                    }]}
                    enabled={false}
                    ref={(tether) => {
                        this.tether = tether;
                    }}
                    offset="-4px 0"
                >
                    <a
                        {...filteredProps}
                        aria-haspopup="true"
                        aria-expanded={this.state.isShowing ? 'true' : 'false'}
                        className={triggerClass}
                        href={href}
                        onFocus={this._bindTriggerTab}
                        onBlur={this._unbindTriggerTab}
                        onClick={this._handleClick}
                        ref={(menuTriggerEl) => {
                            this.menuTriggerEl = menuTriggerEl;
                        }}
                    >
                        {children}
                    </a>
                    {this.state.isShowing && menuElement}
                </TetherComponent>
            </div>
        );
    }
}

MenuPanel.displayName = displayName;

export default MenuPanel;
