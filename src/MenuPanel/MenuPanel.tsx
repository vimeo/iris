import React from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';
import { rem } from 'polished';
//@ts-ignore
import { Manager, Target, Popper } from 'react-popper';
import { Transition } from 'react-transition-group';
import { COLORS, KEY_CODES, Z_INDEX } from '../globals/js/constants';

// this is defined in the MenuPanel.scss file
const MENU_SPEED = 100;

export interface MenuPanelProps {
    /**
     * Determines Menu Attachment Direction
     */
    alignment?: 'left' | 'right' | 'center';
    className?: string;
    /**
     * Becomes the trigger of the menu panel (usually a button)
     */
    children: React.ReactNode;
    /**
     * Initial show/hide State
     */
    isShowing?: boolean;
    /**
     * Becomes the content of the menu panel
     */
    menuContent: React.ReactNode;
    /**
     * Callback when the menu closes
     */
    onClose?: () => void;
    /**
     * Callback when the menu trigger is clicked
     */
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    /**
     * Callback when the menu opens
     */
    onOpen?: () => void;
    /**
     * Adds class to menu panel
     */
    panelClassName?: string;
    /**
     * Spread alternative options to the panel's Popper component. See API for react-popper
     */
    panelOptions?: Object;
    /**
     * Determines width of menu
     */
    size: 'sm' | 'md' | 'lg';
    /**
     * Let the trigger element fill up available space
     */
    isFluid?: boolean;
    /**
     * Control the menu exclusively with the isShowing prop
     */
    isControlled?: boolean;
    /**
     * Refopcus on the elenment that opened the menu when the menu closes **Default: True**
     */
    shouldRefocusTriggerOnClose?: boolean;
    /**
     * SUpply a z-insex to overrride the standard MenuPanel z-index
     */
    zIndexOverride?: number;
}

export interface MenuPanelState {
    isShowing: boolean;
}

// filter out isFluid prop because styled() is failing to do so
const ManagerFiltered = ({
    //@ts-ignore
    isFluid,
    ...filteredProps
}) => <Manager {...filteredProps} />;

interface ManagerStyledProps {
    isFluid?: boolean;
}

const ManagerStyled = styled<ManagerStyledProps>(ManagerFiltered)`
    display: ${props => (props.isFluid ? 'block' : 'inline-block')};
`;

// filter out zIndexOverride prop because styled() is failing to do so
const PopperFiltered = ({
    //@ts-ignore
    zIndexOverride,
    ...filteredProps
}) => <Popper {...filteredProps} />;

const PopperStyled = styled(PopperFiltered)`
    z-index: ${props => props.zIndexOverride || Z_INDEX.menuPanel};
`;

const MenuPanelWidths = {
    sm: 124,
    md: 200,
    lg: 320,
};

interface MenuPanelStyledProps extends React.HTMLProps<HTMLDivElement> {
    menuSize: 'sm' | 'md' | 'lg';
}

const MenuPanelStyled = styled<MenuPanelStyledProps, 'div'>('div')`
    border-radius: ${rem(2)};
    background: ${COLORS.White};
    box-shadow: 0 0 ${rem(1)} 0 rgba(0, 0, 0, 0.15),
        0 ${rem(4)} ${rem(8)} 0 rgba(0, 0, 0, 0.15);
    width: ${props => rem(MenuPanelWidths[props.menuSize])};
    opacity: 0;
    transition: opacity ${MENU_SPEED}ms ease-in;
`;

const transitionStyles = {
    entering: {
        opacity: 0.1,
    },
    entered: {
        opacity: 1,
    },
    exiting: {
        opacity: 0,
    },
};

class MenuPanel extends React.Component {
    static defaultProps = {
        alignment: 'center',
        size: 'md',
        shouldRefocusTriggerOnClose: true,
    };

    constructor(props: MenuPanelProps) {
        super(props);
        this.state = {
            isShowing: props.isShowing,
        };
    }
    state: MenuPanelState;

    componentDidMount() {
        if (this.state.isShowing) {
            this._openMenu();
        }
    }

    componentWillReceiveProps(nextProps: MenuPanelProps) {
        if (nextProps.isShowing !== this.props.isShowing) {
            this.setState({
                isShowing: nextProps.isShowing,
            });
        }
    }

    componentDidUpdate(_, prevState: MenuPanelState) {
        if (!prevState.isShowing && this.state.isShowing) {
            this._openMenu();
        } else if (prevState.isShowing && !this.state.isShowing) {
            this._closeMenu();
        }
    }

    componentWillUnmount() {
        this._unBindEvents();
    }

    props: MenuPanelProps;
    firstFocusableElement: HTMLElement;
    lastFocusableElement: HTMLElement;
    menu: HTMLElement;
    menuId: string;
    menuTriggerEl: HTMLElement;

    _handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        this._toggleClick();
        event.preventDefault();

        if (typeof this.props.onClick === 'function') {
            this.props.onClick(event);
        }
    };

    _handleClickWhileOpen = (event: Event) => {
        if (!this.menu) {
            this.menu = findDOMNode(this).querySelector('[data-js-menu]');
        }
        const thisMenu = this.menu;

        if (
            this.state.isShowing &&
            event.target instanceof HTMLElement &&
            !thisMenu.contains(event.target)
        ) {
            this.setState({
                isShowing: false,
            });
        }
    };

    _handleEsc = (event: KeyboardEvent) => {
        if (this.state.isShowing && event.keyCode === KEY_CODES.esc) {
            this.setState({
                isShowing: false,
            });
        }
    };

    _handleForwardFocusTab = (event: KeyboardEvent) => {
        if (event.keyCode === KEY_CODES.tab) {
            this.setState({
                isShowing: false,
            });
            event.preventDefault();
        }
    };

    // when the menu is open, a forward tab should go to the first menu item
    _handleForwardsTriggerTab = (event: KeyboardEvent) => {
        if (
            event.keyCode === KEY_CODES.tab &&
            this.state.isShowing &&
            this.firstFocusableElement
        ) {
            event.preventDefault();
            this._unbindTriggerTab();
            this.firstFocusableElement.focus();
        }
    };

    // tabbing backwards out of the menu closes it.
    _handleBackwardFocusTab = (event: KeyboardEvent) => {
        // shift + tab
        if (event.shiftKey && event.keyCode === KEY_CODES.tab) {
            this.setState({
                isShowing: false,
            });
            event.preventDefault();
        }
    };

    _bindEvents = () => {
        if (!this.props.isControlled) {
            document.addEventListener('click', this._handleClickWhileOpen);

            document.addEventListener('keydown', this._handleEsc);

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
    };

    _unBindEvents = () => {
        if (!this.props.isControlled) {
            document.removeEventListener('click', this._handleClickWhileOpen);

            document.removeEventListener('keydown', this._handleEsc);

            if (this.lastFocusableElement && this.firstFocusableElement) {
                this.lastFocusableElement.removeEventListener(
                    'keydown',
                    this._handleForwardFocusTab
                );

                this.firstFocusableElement.removeEventListener(
                    'keydown',
                    this._handleBackwardFocusTab
                );
            }
        }
    };

    _bindTriggerTab = () => {
        document.addEventListener('keydown', this._handleForwardsTriggerTab);
    };

    _unbindTriggerTab = () => {
        document.removeEventListener('keydown', this._handleForwardsTriggerTab);
    };

    _closeMenu = () => {
        if (!this.props.isControlled) {
            this._unBindEvents();
        }
        if (this.props.shouldRefocusTriggerOnClose) {
            this.menuTriggerEl.focus();
        }
        if (typeof this.props.onClose === 'function') {
            this.props.onClose();
        }
    };

    _openMenu = () => {
        this._setFocusableElementList(this._bindEvents);
        if (typeof this.props.onOpen === 'function') {
            this.props.onOpen();
        }
    };

    _toggleClick = () => {
        if (!this.props.isControlled) {
            this.setState({ isShowing: !this.state.isShowing });
        }
    };

    _setFocusableElementList(callback: any) {
        if (!this.menu) {
            this.menu = findDOMNode(this).querySelector('[data-js-menu]');
        }
        const thisMenu = this.menu;

        if (thisMenu instanceof HTMLDivElement) {
            const focusableList = thisMenu.querySelectorAll(
                'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
            );

            if (focusableList.length) {
                this.firstFocusableElement = Array.prototype.slice.call(
                    focusableList
                )[0];

                this.lastFocusableElement = Array.prototype.slice.call(
                    focusableList
                )[focusableList.length - 1];
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
            isControlled, // eslint-disable-line no-unused-vars
            isFluid,
            isShowing, // eslint-disable-line no-unused-vars
            menuContent,
            onClick, // eslint-disable-line no-unused-vars
            onClose, // eslint-disable-line no-unused-vars
            onOpen, // eslint-disable-line no-unused-vars
            panelClassName,
            panelOptions,
            shouldRefocusTriggerOnClose, // eslint-disable-line no-unused-vars
            size,
            zIndexOverride,
            ...filteredProps
        } = this.props;

        const placementMap = {
            center: 'bottom',
            left: 'bottom-start',
            right: 'bottom-end',
        };

        const menuElement = (
            <Transition
                in={this.state.isShowing}
                timeout={MENU_SPEED}
                mountOnEnter
                unmountOnExit
            >
                {state => (
                    <MenuPanelStyled
                        data-js-menu
                        className={panelClassName}
                        menuSize={size}
                        style={{
                            ...transitionStyles[state],
                        }}
                    >
                        {menuContent}
                    </MenuPanelStyled>
                )}
            </Transition>
        );

        return (
            <ManagerStyled isFluid={isFluid}>
                <Target>
                    <a
                        {...filteredProps}
                        aria-haspopup="true"
                        aria-expanded={this.state.isShowing ? 'true' : 'false'}
                        href="#"
                        onFocus={this._bindTriggerTab}
                        onBlur={this._unbindTriggerTab}
                        onClick={this._handleClick}
                        ref={menuTriggerEl => {
                            this.menuTriggerEl = menuTriggerEl;
                        }}
                    >
                        {children}
                    </a>
                </Target>
                <PopperStyled
                    //@ts-ignore placement is a Popper Prop
                    placement={placementMap[alignment]}
                    zIndexOverride={zIndexOverride}
                    {...panelOptions}
                >
                    {menuElement}
                </PopperStyled>
            </ManagerStyled>
        );
    }
}

export default MenuPanel;
