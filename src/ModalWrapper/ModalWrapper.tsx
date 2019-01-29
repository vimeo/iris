import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { Transition } from 'react-transition-group';
import { KEY_CODES } from '../Legacy/KEY_CODES';
import { Z_INDEXES as Z_INDEX } from '../Legacy/Z_INDEXES';

export interface ModalWrapperProps
  extends React.HTMLProps<HTMLDivElement> {
  firstFocusSelector?: string;
  isOpen?: boolean;
  backgroundOpacity?: 'lighter' | 'darker';
  noDismiss?: boolean;
  onCloseEvent?: (e?: Event) => void;
  modalPosition?: 'center';
  modalSpeed?: number;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  zIndexStartingPoint?: number;
}
// ==================== ModalWrapper Styled Thing

const ModalWrapperStyled = styled<ModalWrapperProps, 'div'>('div')`
  position: fixed;
  z-index: ${props => props.zIndexStartingPoint};
  top: 0;
  left: 0;
  width: 0;
  display: block;
`;

const wrapperTransitionStyles = {
  entered: {
    width: '100%',
    height: '100%',
  },
  exiting: {
    width: '100%',
    height: '100%',
  },
};

const ModalOverlayStyled = styled<ModalWrapperProps, 'div'>('div')`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  z-index: ${props => props.zIndexStartingPoint};
  transition: all ${props => props.modalSpeed}ms ease-in-out;
  background-color: rgba(
    0,
    0,
    0,
    ${props => (props.backgroundOpacity === 'lighter' ? 0.33 : 0.66)}
  );
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const overlayTransitionStyles = {
  entered: {
    opacity: '1',
  },
  exiting: {
    opacity: '0',
  },
};

interface ContentWrapperProps
  extends React.HTMLProps<HTMLDivElement> {
  modalPosition?: 'center';
  zIndexStartingPoint: number;
}

const getModalPositionCSS = props => {
  if (props.modalPosition === 'center') {
    return css`
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: calc(100% - ${rem(40)});
    `;
  }
};

const ContentWrapperStyled = styled<ContentWrapperProps, 'div'>(
  'div',
)`
  cursor: default;
  z-index: ${props => props.zIndexStartingPoint + 1};
  position: absolute;

  ${props => getModalPositionCSS(props)};
`;

export class ModalWrapper extends Component<ModalWrapperProps> {
  firstFocusableElement: HTMLElement;
  focusableElementList: any;
  lastFocusableElement: HTMLElement;
  previouslyFocusedElement: HTMLElement;
  props: ModalWrapperProps;
  scrollDistance: number;
  thisEl: any;

  componentDidUpdate(prevProps: ModalWrapperProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      if (this.props.isOpen) {
        this._openModal();
      } else if (this.props.isOpen && prevProps.isOpen) {
        this._resetModal();
      } else {
        this._closeModal();
      }
    }
  }

  _bindEvents() {
    document.addEventListener('keydown', this._handleEsc);
    if (this.lastFocusableElement && this.firstFocusableElement) {
      this.lastFocusableElement.addEventListener(
        'keydown',
        this._handleForwardFocusLooping,
      );

      this.firstFocusableElement.addEventListener(
        'keydown',
        this._handleBackwardFocusLooping,
      );
    }
  }

  _closeModal = () => {
    this._unfreezeBodyScroll();
    this._resetOriginalFocus();
    this._unfreezeBodyScroll();
    this._unbindEvents();
  };

  _contentClick = e => {
    e.stopPropagation();
  };

  // close modal on esc key
  _handleEsc = (e: KeyboardEvent) => {
    if (e.keyCode === KEY_CODES.esc && !this.props.noDismiss) {
      this._triggerClose(e);
    }
  };

  // don't let the user tab forwards out of the modal, set them back to the first focusable element
  _handleForwardFocusLooping = (e: KeyboardEvent) => {
    if (e.keyCode === KEY_CODES.tab) {
      this._setFirstFocus();
      e.preventDefault();
    }
  };

  // don't let the user tab backwards out of the modal, set them back to the last focusable element
  _handleBackwardFocusLooping = (e: KeyboardEvent) => {
    // shift + tab
    if (e.shiftKey && e.keyCode === KEY_CODES.tab) {
      this._setLastFocus();
      e.preventDefault();
    }
  };

  _freezeBodyScroll() {
    this.scrollDistance = window.pageYOffset;
    const topOffset = `-${this.scrollDistance}px`;

    document.body.style.position = 'fixed';
    document.body.style.height = '100%';
    document.body.style.width = '100%';
    document.body.style.top = topOffset;
  }

  _getOriginalFocusedEl() {
    // store the element that was focused when the modal opened
    const previouslyFocusedElement = document.activeElement;
    if (previouslyFocusedElement) {
      // @ts-ignore
      this.previouslyFocusedElement = previouslyFocusedElement;
    }
  }

  ref = React.createRef();

  _openModal = () => {
    this._freezeBodyScroll();
    this._bindEvents();
    const elementListCallback = () => {
      this._bindEvents();
    };

    if (!this.thisEl) {
      this.thisEl = this.ref;
    }

    if (!this.previouslyFocusedElement) {
      this._getOriginalFocusedEl();
    }

    this._setFocusableElementList(
      elementListCallback.bind(this),
      true,
    );
  };

  _overlayClick = e => {
    if (!this.props.noDismiss) {
      this._triggerClose(e);
    }
  };

  _resetModal() {
    this._unbindEvents();
    const elementListCallback = () => {
      this._bindEvents();
    };

    if (!this.thisEl) {
      const el = ReactDOM.findDOMNode(this);
      this.thisEl = el;
    }

    this._setFocusableElementList(
      elementListCallback.bind(this),
      false,
    );
  }

  _resetOriginalFocus() {
    // put the focus back to the element that was focused when the modal opened.
    if (this.previouslyFocusedElement) {
      const el = this.previouslyFocusedElement;
      el.focus();
    }
  }

  _setFocusableElementList(callback: any, shouldSetFocus: boolean) {
    if (this.thisEl instanceof Element) {
      const focusableList = this.thisEl.querySelectorAll(
        'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled])',
      );
      if (focusableList.length) {
        this.focusableElementList = focusableList;

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

    if (shouldSetFocus) {
      this._setFirstFocus();
    }
  }

  _setFirstFocus() {
    const selector = this.props.firstFocusSelector;
    // this is only going to work if this.thisEl is properly set...

    if (this.thisEl instanceof HTMLElement) {
      // if a selector was set on this.props.firstFocusSelector we first try to focus on that.
      if (selector) {
        const firstFocusEl = this.thisEl.querySelector(selector);

        if (firstFocusEl instanceof HTMLElement) {
          firstFocusEl.focus();
          return;
        }
      } else if (this.firstFocusableElement) {
        // finally, we try to focus on the first focusable element if there is one.
        this.firstFocusableElement.focus();
      }
    }
  }

  _setLastFocus() {
    if (this.lastFocusableElement) {
      this.lastFocusableElement.focus();
    }
  }

  _triggerClose = e => {
    this._closeModal();
    if (typeof this.props.onCloseEvent === 'function') {
      this.props.onCloseEvent(e);
    }
  };

  _unbindEvents() {
    document.removeEventListener('keydown', this._handleEsc);
  }

  _unfreezeBodyScroll() {
    document.body.style.position = '';
    document.body.style.height = '';
    document.body.style.width = '';
    document.body.style.top = '';

    // reset scroll place, needs a slight delay to work.
    setTimeout(() => {
      window.scrollTo(0, this.scrollDistance);
    }, 2);
  }

  public render() {
    const {
      backgroundOpacity = 'darker',
      children,
      isOpen,
      modalPosition,
      modalSpeed = 250,
      mountOnEnter,
      // @ts-ignore
      noDismiss,
      // @ts-ignore
      onCloseEvent,
      unmountOnExit,
      zIndexStartingPoint = Z_INDEX.modalWrapper,
    } = this.props;

    return (
      <Transition
        in={isOpen}
        timeout={modalSpeed}
        mountOnEnter={mountOnEnter}
        unmountOnExit={unmountOnExit}
      >
        {state => (
          <ModalWrapperStyled
            style={{
              ...wrapperTransitionStyles[state],
            }}
            zIndexStartingPoint={zIndexStartingPoint}
          >
            <ModalOverlayStyled
              backgroundOpacity={backgroundOpacity}
              isOpen={isOpen}
              onClick={this._overlayClick}
              style={{
                ...overlayTransitionStyles[state],
              }}
              modalSpeed={modalSpeed}
              zIndexStartingPoint={zIndexStartingPoint}
            />
            <ContentWrapperStyled
              onClick={this._contentClick}
              zIndexStartingPoint={zIndexStartingPoint}
              modalPosition={modalPosition}
            >
              {children}
            </ContentWrapperStyled>
          </ModalWrapperStyled>
        )}
      </Transition>
    );
  }
}
