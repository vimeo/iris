import React, { Component, HTMLProps } from 'react';
import { findDOMNode } from 'react-dom';
import { KEY_CODES } from '../Legacy/KEY_CODES';
import { Transition } from 'react-transition-group';
import {
  MenuPanelProps as Props,
  MenuPanelState as State,
  MenuPanelDefaultProps as DefaultProps,
} from './MenuPanelTypes';
import {
  MenuPanelStyled,
  menuPanelTransitionStyles,
  menuSpeed,
  TetherComponentStyled,
  TriggerWrapperStyled,
  WrapperStyled,
} from './MenuPanelStyled';
import { Omit } from '../Utils/Omit';

const defaultProps: DefaultProps = {
  alignment: 'center',
  href: '#',
  theme: 'light',
  size: 'md',
  shouldRefocusTriggerOnClose: true,
};

export class MenuPanel extends Component<
  Props & Omit<HTMLProps<HTMLAnchorElement>, 'size'>,
  State
> {
  firstFocusableElement: HTMLElement;
  lastFocusableElement: HTMLElement;
  menu: HTMLElement;
  menuId: string;
  menuTriggerEl: HTMLElement;
  tether: any;

  static defaultProps = defaultProps;
  public state = { isShowing: this.props.isShowing };

  componentDidMount() {
    if (this.state.isShowing) {
      this._openMenu();
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.isShowing !== this.props.isShowing) {
      this.setState({
        isShowing: nextProps.isShowing,
      });
    }
  }

  componentDidUpdate(_, prevState: State) {
    if (!prevState.isShowing && this.state.isShowing) {
      this._openMenu();
    } else if (prevState.isShowing && !this.state.isShowing) {
      this._closeMenu();
    }
  }

  componentWillUnmount() {
    this._unBindEvents();
  }

  _handleClick = (event: React.MouseEvent<any>) => {
    this._toggleClick();
    if (this.props.href === '#') {
      event.preventDefault();
    }

    if (typeof this.props.onClick === 'function') {
      this.props.onClick(event);
    }
  };

  _handleClickWhileOpen = (event: MouseEvent) => {
    if (
      this.state.isShowing &&
      event.target instanceof HTMLElement &&
      this.menu &&
      !findDOMNode(this.menu).contains(event.target)
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
          this._handleForwardFocusTab,
        );

        this.firstFocusableElement.addEventListener(
          'keydown',
          this._handleBackwardFocusTab,
        );
      }
    }
  };

  _unBindEvents = () => {
    if (!this.props.isControlled) {
      document.removeEventListener(
        'click',
        this._handleClickWhileOpen,
      );

      document.removeEventListener('keydown', this._handleEsc);

      if (this.lastFocusableElement && this.firstFocusableElement) {
        this.lastFocusableElement.removeEventListener(
          'keydown',
          this._handleForwardFocusTab,
        );

        this.firstFocusableElement.removeEventListener(
          'keydown',
          this._handleBackwardFocusTab,
        );
      }
    }
  };

  _bindTriggerTab = () => {
    document.addEventListener(
      'keydown',
      this._handleForwardsTriggerTab,
    );
  };

  _unbindTriggerTab = () => {
    document.removeEventListener(
      'keydown',
      this._handleForwardsTriggerTab,
    );
  };

  _closeMenu = () => {
    if (!this.props.isControlled) {
      this._unBindEvents();
    }

    if (this.props.shouldRefocusTriggerOnClose) {
      if (this.menuTriggerEl.focus) {
        this.menuTriggerEl.focus();
      }
    }

    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
  };

  _openMenu = () => {
    this._setFocusableElementList(this._bindEvents);
    // this.tether.position();
    if (typeof this.props.onOpen === 'function') {
      this.props.onOpen();
    }
  };

  _toggleClick = () => {
    if (!this.props.isControlled) {
      this.setState({
        isShowing: !this.state.isShowing,
      });
    }
  };

  _setFocusableElementList(callback: any) {
    const thisMenu = findDOMNode(this.menu);

    if (thisMenu instanceof Element) {
      const focusableList = thisMenu.querySelectorAll(
        'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]',
      );

      if (focusableList.length) {
        this.firstFocusableElement = Array.prototype.slice.call(
          focusableList,
        )[0];

        this.lastFocusableElement = Array.prototype.slice.call(
          focusableList,
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
      theme = 'light',
      href = '#',
      hideOutline,
      isControlled, // eslint-disable-line no-unused-vars
      isFluid,
      isShowing, // eslint-disable-line no-unused-vars
      menuContent,
      onClick, // eslint-disable-line no-unused-vars
      onClose, // eslint-disable-line no-unused-vars
      onOpen, // eslint-disable-line no-unused-vars
      panelClassName,
      shouldRefocusTriggerOnClose = true, // eslint-disable-line no-unused-vars
      size = 'md',
      zIndexOverride,
      ref: _,
      ...filteredProps
    } = this.props;

    return (
      <WrapperStyled isFluid={isFluid}>
        <TetherComponentStyled
          attachment={`top ${alignment}`}
          targetAttachment={`bottom ${alignment}`}
          constraints={[
            {
              to: 'window',
              attachment: 'together',
            },
          ]}
          enabled
          innerRef={tether => {
            this.tether = tether;
          }}
          offset="-4px 0"
        >
          <TriggerWrapperStyled
            {...filteredProps}
            aria-haspopup="true"
            aria-expanded={this.state.isShowing ? 'true' : 'false'}
            hideOutline={hideOutline}
            href={href}
            isFluid={isFluid}
            onFocus={this._bindTriggerTab}
            onBlur={this._unbindTriggerTab}
            onClick={this._handleClick}
            ref={menuTriggerEl => {
              this.menuTriggerEl = menuTriggerEl;
            }}
          >
            {children}
          </TriggerWrapperStyled>
          <Transition
            in={this.state.isShowing}
            exit={!this.state.isShowing}
            timeout={menuSpeed}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            {state => (
              <MenuPanelStyled
                className={panelClassName}
                isShowing={this.state.isShowing}
                ref={menu => {
                  this.menu = menu;
                }}
                size={size}
                style={{
                  ...menuPanelTransitionStyles[state],
                }}
                theme={theme}
                zIndexOverride={zIndexOverride}
              >
                {menuContent}
              </MenuPanelStyled>
            )}
          </Transition>
        </TetherComponentStyled>
      </WrapperStyled>
    );
  }
}
