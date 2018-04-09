import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import KEY_CODES from '../globals/js/constants/KEY_CODES';
import Z_INDEX from '../globals/js/constants/Z_INDEXES';

export interface ModalWrapperProps extends React.HTMLProps<HTMLDivElement> {
    firstFocusSelector?: string;
    isOpen?: boolean;
    backgroundOpacity?: 'lighter' | 'darker';
    noDismiss?: boolean;
    onCloseEvent?: (e?: Event) => void;
    modalSpeed?: number;
    zIndexStartingPoint?: number;
}
// ==================== ModalWrapper Styled Thing

const ModalWrapperStyled = styled<ModalWrapperProps, 'div'>('div')`
    flex-direction: column;
    position: fixed;
    z-index: ${props => props.zIndexStartingPoint};
    top: 0;
    left: 0;
    justify-content: center;
    width: 0;
    height: 0;
    display: flex;
`;

const wrapperTransitionStyles = {
    entered: {
        width: '100%',
        height: '100vh',
    },
    exiting: {
        width: '100%',
        height: '100vh',
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

interface ContentWrapperProps extends React.HTMLProps<HTMLDivElement> {
    zIndexStartingPoint: number;
}

const ContentWrapperStyled = styled<ContentWrapperProps, 'div'>('div')`
    cursor: default;
    z-index: ${props => props.zIndexStartingPoint + 1};
    position: absolute;
    width: 100%;
    height: 100%;
`;

// ==================== ModalWrapper

class ModalWrapper extends React.Component<any, any> {
    focusableElementList: any;
    props: ModalWrapperProps;
    previouslyFocusedElement: HTMLElement;
    firstFocusableElement: HTMLElement;
    lastFocusableElement: HTMLElement;
    thisEl: any;
    scrollDistance: number;

    componentDidUpdate(prevProps: ModalWrapperProps) {
        if (this.props.isOpen !== prevProps.isOpen) {
            if (this.props.isOpen) {
                this._openModal();
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
                this._handleForwardFocusLooping
            );

            this.firstFocusableElement.addEventListener(
                'keydown',
                this._handleBackwardFocusLooping
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
            //@ts-ignore
            this.previouslyFocusedElement = previouslyFocusedElement;
        }
    }

    _openModal = () => {
        this._freezeBodyScroll();
        this._bindEvents();
        const elementListCallback = () => {
            this._bindEvents();
        };

        if (!this.thisEl) {
            const el = ReactDOM.findDOMNode(this);
            this.thisEl = el;
        }

        if (!this.previouslyFocusedElement) {
            this._getOriginalFocusedEl();
        }

        this._setFocusableElementList(elementListCallback.bind(this), true);
    };

    _overlayClick = e => {
        if (!this.props.noDismiss) {
            this._triggerClose(e);
        }
    };

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
                'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled])'
            );
            if (focusableList.length) {
                this.focusableElementList = focusableList;

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
        document.body.style.position = null;
        document.body.style.height = null;
        document.body.style.width = null;
        document.body.style.top = null;

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
            modalSpeed = 250,
            //@ts-ignore
            noDismiss,
            //@ts-ignore
            onCloseEvent,
            zIndexStartingPoint = Z_INDEX.modalWrapper,
        } = this.props;

        return (
            <Transition
                in={isOpen}
                timeout={modalSpeed}
                mountOnEnter
                unMountOnExit
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
                        >
                            {children}
                        </ContentWrapperStyled>
                    </ModalWrapperStyled>
                )}
            </Transition>
        );
    }
}

export default ModalWrapper;
