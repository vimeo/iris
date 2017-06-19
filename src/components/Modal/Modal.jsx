// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import styles from './Modal.scss';
import KEY_CODES from '../../globals/js/constants/KEY_CODES';
import { CSSTransitionGroup } from 'react-transition-group';
import ButtonDialogClose from '../ButtonDialogClose/ButtonDialogClose';

const displayName = 'Modal';
const modalSpeed = 350;

type Props = {
    children: React$Element<*>,
    className?: string,
    fullBleed?: boolean,
    isShowing?: boolean;
    modalLabelId: string,
    modalDescriptionId: string,
    modalCloseLabel: string,
    modalTitle?: string,
    onDismiss?: Function,
};

class Modal extends React.Component {

    constructor(props: Props) {
        super(props);
        this._handleModalClose.bind(this);
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.isShowing && !prevProps.isShowing) {
            this._freezeBodyScroll();

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

            this._setFocusableElementList(
                elementListCallback.bind(this)
            );
        }
        else if (!this.props.isShowing && prevProps.isShowing) {
            this. _unfreezeBodyScroll();
            this._resetOriginalFocus();
            this._unbindEvents();
        }
    }

    componentWillUnmount() {
        this. _unfreezeBodyScroll();
        this._resetOriginalFocus();
    }

    props: Props;
    focusableElementList: Object;
    previouslyFocusedElement: Object;
    firstFocusableElement: Object;
    lastFocusableElement: Object;
    thisEl: any;

    _bindEvents() {
        document.addEventListener(
            'keydown',
            this._handleEsc.bind(this)
        );

        this.lastFocusableElement.addEventListener(
            'keydown',
            this._handleForwardFocusLooping.bind(this)
        );

        this.firstFocusableElement.addEventListener(
            'keydown',
            this._handleBackwardFocusLooping.bind(this)
        );
    }

    _unbindEvents() {
        document.removeEventListener(
            'keydown',
            this._handleEsc.bind(this)
        );
        this.lastFocusableElement.removeEventListener(
            'keydown',
            this._handleForwardFocusLooping.bind(this)
        );

        this.firstFocusableElement.removeEventListener(
            'keydown',
            this._handleBackwardFocusLooping.bind(this)
        );
    }

    // close modal on esc key
    _handleEsc(event: Event) {
        if (event.keyCode === KEY_CODES.esc && this.props.onDismiss) {
            this._handleModalClose(this.props.onDismiss);
        }
    }

    // don't let the user tab forwards out of the modal, set them back to the first focusable element
    _handleForwardFocusLooping(event: Event) {
        if (event.keyCode === KEY_CODES.tab) {
            this._setFirstFocus();
            event.preventDefault();
        }
    }

    // don't let the user tab backwards out of the modal, set them back to the last focusable element
    _handleBackwardFocusLooping(event: Event) {
        // shift + tab
        if (event.shiftKey && event.keyCode === KEY_CODES.tab) {
            this._setLastFocus();
            event.preventDefault();
        }
    }

    _handleModalClose(onDismiss: Function) {
        if (typeof onDismiss === 'function') {
            onDismiss();
        }
    }

    _freezeBodyScroll() {
            // Flow does not like using classList on document body
            // $FlowFixMe
        document.body.classList.add(styles.freezeBodyScroll);
    }

    _unfreezeBodyScroll() {
            // Flow does not like using classList on document body
            // $FlowFixMe
        document.body.classList.remove(styles.freezeBodyScroll);
    }

    _getOriginalFocusedEl() {
        // store the element that was focused when the modal opened
        const previouslyFocusedElement = document.activeElement;
        if (previouslyFocusedElement) {
            this.previouslyFocusedElement = previouslyFocusedElement;
        }
    }

    _setFocusableElementList(callback: any) {
        if (this.thisEl instanceof Element) {
            const focusableList = this.thisEl.querySelectorAll(
                'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
            );
            if (focusableList.length) {
                this.focusableElementList = focusableList;

                this.firstFocusableElement = Array.prototype.slice.call(focusableList)[0];

                this.lastFocusableElement = Array.prototype.slice.call(focusableList)[focusableList.length - 1];

                this._setFirstFocus();
            }
        }
        if (typeof callback === 'function') {
            callback();
        }
    }

    _resetOriginalFocus() {
        // put the focus back to the element that was focused when the modal opened.
        if (this.previouslyFocusedElement) {
            const el = this.previouslyFocusedElement;
            el.focus();
        }
    }

    _setFirstFocus() {
        if (this.firstFocusableElement) {
            this.firstFocusableElement.focus();
        }
    }

    _setLastFocus() {
        if (this.lastFocusableElement) {
            this.lastFocusableElement.focus();
        }
    }

    render() {
        const {
            children,
            className,
            fullBleed,
            isShowing,
            modalCloseLabel,
            modalDescriptionId,
            modalLabelId,
            modalTitle,
            onDismiss,
            ...filteredProps
        } = this.props;

        // className builder
        const componentClass = classNames(
            styles.Modal,
            className
        );

        const contentClass = classNames(
            styles.ModalContent,
            (fullBleed ? styles.fullBleed : null)
        );

        const ModalTitleElement = (
            <h2 id={modalLabelId} className={styles.TitleBar}>
                {modalTitle}
            </h2>
        );

        const CloseButton = (
            <ButtonDialogClose
                className={styles.ModalCloseButton}
                onClick={onDismiss ? ()=> this._handleModalClose(onDismiss) : null}
                buttonTitle={modalCloseLabel}
            />
        );

        const ModalComponent = (
            <div className={styles.ModalWrapper}>
                <div
                    {...filteredProps}
                    role="dialog"
                    aria-labelledby={modalLabelId}
                    aria-describedby={modalDescriptionId}
                    className={componentClass}
                >
                    {modalTitle ? ModalTitleElement : null}
                    <div className={contentClass}>
                        {children}
                    </div>
                    { onDismiss ? CloseButton : null}
                </div>
                <div
                    className={styles.Overlay}
                    onClick={onDismiss ? ()=> this._handleModalClose(onDismiss) : null}
                    tabIndex="-1"
                />
            </div>
        );

        return (

                <CSSTransitionGroup
                    transitionAppear
                    transitionLeave
                    transitionEnterTimeout={modalSpeed}
                    transitionLeaveTimeout={modalSpeed}
                    transitionAppearTimeout={modalSpeed}
                    transitionName={{
                        enter: styles.enter,
                        enterActive: styles.enterActive,
                        leave: styles.leave,
                        leaveActive: styles.leaveActive,
                        appear: styles.appear,
                        appearActive: styles.appearActive,
                    }}
                >
                    {isShowing ? ModalComponent : null}
                </CSSTransitionGroup>
        );
    }
}

Modal.displayName = displayName;
export default Modal;
