// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import styles from './Modal.scss';
import BREAKPOINTS from '../../globals/js/constants/BREAKPOINTS';
import KEY_CODES from '../../globals/js/constants/KEY_CODES';
import { CSSTransitionGroup } from 'react-transition-group';
import Button from '../Button/Button';
import ButtonDialogClose from '../ButtonDialogClose/ButtonDialogClose';
import { GridBlock, GridCol, Grid } from '../Grid/Grid';
import { Header4 } from '../../utility_components/Type/Type';
import OverflowTruncationWrapper from '../OverflowTruncationWrapper/OverflowTruncationWrapper';
import { throttle } from 'lodash';

const displayName = 'Modal';

// this value should be kept in sync with the timing variable in the Modal.scss
const modalSpeed = parseInt(styles.Modal_AnimationTime, 10);

type Props = {
    children: React$Element<*>,
    className?: string,
    dismissButtonFormat: 'light'| 'dark',
    firstFocusSelector: string,
    fullBleed?: boolean,
    isShowing?: boolean;
    modalLabelId: string,
    modalDescriptionId: string,
    modalCloseLabel: string,
    modalTitle?: string,
    onDismiss?: Function,
    primaryButtonProps?: Object,
    secondaryButtonProps?: Object,
    hideDismissButton?: boolean,
    size?: 'sm' | 'md' | 'lg',
};

type State = {
    overflowAreaHeight: number;
};

class Modal extends React.Component {
    static defaultProps = {
        size: 'md',
        dismissButtonFormat: 'dark',
    };


    constructor(props: Props) {
        super(props);
        this.state = {
            overflowAreaHeight: this._getOverflowScrollAreaHeight(),
        };
        this._setOverflowScrollAreaHeight = throttle(this._setOverflowScrollAreaHeight, 200);
    }

    state: State;

    componentDidMount() {
        if (this.props.isShowing) {
            this._openModal();
        }
    }

    componentDidUpdate(prevProps: Props) {
        if (this.props.isShowing && !prevProps.isShowing) {
            this._openModal();
        }
        else if (!this.props.isShowing && prevProps.isShowing) {
            this._closeModal();
        }
        else if (this.props.isShowing && prevProps.isShowing) {
            this._resetModal();
        }
    }

    componentWillUnmount() {
        if (this.props.isShowing) {
            this._closeModal();
        }
    }

    props: Props;
    focusableElementList: Object;
    previouslyFocusedElement: Object;
    firstFocusableElement: Object;
    lastFocusableElement: Object;
    thisEl: any;
    scrollDistance: number;

    _bindEvents() {
        document.addEventListener(
            'keydown',
            this._handleEsc
        );

        window.addEventListener('resize', this._setOverflowScrollAreaHeight);

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

    _unbindEvents() {
        document.removeEventListener(
            'keydown',
            this._handleEsc
        );

        window.removeEventListener('resize', this._setOverflowScrollAreaHeight);

        this.lastFocusableElement.removeEventListener(
            'keydown',
            this._handleForwardFocusLooping
        );

        this.firstFocusableElement.removeEventListener(
            'keydown',
            this._handleBackwardFocusLooping
        );
    }

    // close modal on esc key
    _handleEsc = (event: Event) => {
        if (event.keyCode === KEY_CODES.esc && this.props.onDismiss) {
            this._handleModalClose(this.props.onDismiss);
        }
    }

    // don't let the user tab forwards out of the modal, set them back to the first focusable element
    _handleForwardFocusLooping = (event: Event) => {
        if (event.keyCode === KEY_CODES.tab) {
            this._setFirstFocus();
            event.preventDefault();
        }
    }

    // don't let the user tab backwards out of the modal, set them back to the last focusable element
    _handleBackwardFocusLooping = (event: Event) => {
        // shift + tab
        if (event.shiftKey && event.keyCode === KEY_CODES.tab) {
            this._setLastFocus();
            event.preventDefault();
        }
    }

    _handleModalClose = (onDismiss: Function) => {
        if (typeof onDismiss === 'function') {
            onDismiss();
        }
    }

    _freezeBodyScroll() {
        this.scrollDistance = window.pageYOffset;
        const topOffset = `-${this.scrollDistance}px`;
        // Flow does not like using classList or style on document body

        // $FlowFixMe
        document.body.classList.add(styles.freezeBodyScroll);
        // $FlowFixMe
        document.body.style.top = topOffset;
    }

    _unfreezeBodyScroll() {
        // Flow does not like using classList on document body
        // $FlowFixMe
        document.body.classList.remove(styles.freezeBodyScroll);
        // $FlowFixMe
        document.body.style.top = null;

        // reset scroll place, needs a slight delay to work.
        setTimeout(() => {
            window.scrollTo(0, this.scrollDistance);
        }, 2);
    }

    _getOriginalFocusedEl() {
        // store the element that was focused when the modal opened
        const previouslyFocusedElement = document.activeElement;
        if (previouslyFocusedElement) {
            this.previouslyFocusedElement = previouslyFocusedElement;
        }
    }

    _closeModal() {
        this. _unfreezeBodyScroll();
        this._resetOriginalFocus();
        this._unbindEvents();
    }
    _openModal() {
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
                elementListCallback.bind(this),
                true
        );
    }

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
                false
        );
    }

    _setFocusableElementList(callback: any, shouldSetFocus: boolean) {
        if (this.thisEl instanceof Element) {
            const focusableList = this.thisEl.querySelectorAll(
                'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled])'
            );
            if (focusableList.length) {
                this.focusableElementList = focusableList;

                this.firstFocusableElement = Array.prototype.slice.call(focusableList)[0];

                this.lastFocusableElement = Array.prototype.slice.call(focusableList)[focusableList.length - 1];
            }
        }
        if (typeof callback === 'function') {
            callback();
        }

        if (shouldSetFocus) {
            this._setFirstFocus();
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
        const selector = this.props.firstFocusSelector;

        // this is only going to work if this.thisEl is properly set...
        if (this.thisEl instanceof Element) {

            // if a selector was set on this.props.firstFocusSelector we first try to focus on that.
            if (selector) {

                const firstFocusEl = this.thisEl.querySelector(selector);

                if (firstFocusEl instanceof Element) {
                    firstFocusEl.focus();
                    return;
                }
            }

            // then we try to focus on the modal close button if it is there
            else if (!this.props.hideDismissButton) {
                const modalCloseButton = this.thisEl.querySelector('[data-js-modalCloseButton]');

                modalCloseButton.focus();
                return;
            }
        }

        // finally, we try to focus on the first focusable element if there is one.
        else if (this.firstFocusableElement) {
            this.firstFocusableElement.focus();
        }
    }

    _setLastFocus() {
        if (this.lastFocusableElement) {
            this.lastFocusableElement.focus();
        }
    }

    _setOverflowScrollAreaHeight = () => {
        this.setState({
            overflowAreaHeight: this._getOverflowScrollAreaHeight(),
        });
    }

    _getOverflowScrollAreaHeight = () => {
        const modifier = window.innerWidth > BREAKPOINTS.sm ? 80 : 134;
        const height = window.innerHeight > 300 ? (window.innerHeight * 0.76) - modifier : window.innerHeight;

        return Math.floor(height);
    }

    render() {
        const {
            children,
            className,
            dismissButtonFormat,
            firstFocusSelector, // eslint-disable-line no-unused-vars
            fullBleed,
            hideDismissButton,
            isShowing,
            modalCloseLabel,
            modalDescriptionId,
            modalLabelId,
            modalTitle,
            onDismiss,
            primaryButtonProps,
            secondaryButtonProps,
            size,
            ...filteredProps
        } = this.props;

        // className builder
        const componentClass = classNames(
            styles.Modal,
            styles[size],
            className
        );

        const contentClass = classNames(
            styles.ModalContent,
            (primaryButtonProps ? styles.hasActionArea : null),
            (fullBleed ? styles.fullBleed : null),
        );

        const dismissClass = classNames(
            styles.ModalCloseButton,
            styles[dismissButtonFormat],
        );

        const actionAreaElement = (
            <div className={styles.ActionArea}>
                <Grid
                    isNested
                >
                    <GridBlock>
                        <GridCol
                            smOffset={8}
                            smSpan={8}
                            formColumn
                        >
                            {secondaryButtonProps ? (
                                <Button
                                    {...secondaryButtonProps}
                                    autoWidth="fluid"
                                    format="secondary"
                                    size="md"
                                />
                            ) : null}
                        </GridCol>
                        <GridCol
                            smSpan={8}
                            formColumn
                        >
                            <Button
                                {...primaryButtonProps}
                                autoWidth="fluid"
                                format="primary"
                                size="md"
                            />
                        </GridCol>
                    </GridBlock>
                </Grid>
            </div>
        );

        const ModalTitleElement = (
            <Header4 id={modalLabelId} element="h2" className={styles.Title}>
                {modalTitle}
            </Header4>
        );

        const CloseButton = (
            <ButtonDialogClose
                buttonTitle={modalCloseLabel}
                className={dismissClass}
                onClick={onDismiss ? () => this._handleModalClose(onDismiss) : null}
                data-js-modalCloseButton
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
                    <OverflowTruncationWrapper
                            maxHeight={this.state.overflowAreaHeight}
                        >
                        <div className={contentClass}>
                            {modalTitle ? ModalTitleElement : null}
                            {children}
                        </div>
                    </OverflowTruncationWrapper>
                    {primaryButtonProps ? actionAreaElement : null}
                    {onDismiss && !hideDismissButton ? CloseButton : null}
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
