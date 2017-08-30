// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './Toastification.scss';
import { CSSTransitionGroup } from 'react-transition-group';
import { ParagraphMd } from '../../../src/utility_components/Type/Type';
import InfoIcon from '../../globals/svg/circle-info.svg';

const displayName = 'Toastification';

// this value should be kept in sync with the timing variable in the Toastification.scss
const animationTime = parseInt(styles.Toastification_AnimationTime, 10);
const fastDelayTime = 3000;
const slowDelayTime = 6000;

type Props = {
    actionLabel?: string,
    children: React$Element<*>,
    className?: string,
    format?: 'warning' | 'neutral',
    isShowing?: boolean,
    onActionClick?: Function,
    onComplete?: Function,
};

type State = {
    isShowing: boolean,
}

class Toastification extends React.Component<void, Props, State> {

    constructor(props: Props, state: State) {
        super(props);
    }

    state: State;

    componentWillMount() {
        const isShowingInitial = this.props.isShowing || false;
        this.setState({
            isShowing: isShowingInitial,
        });
    }

    componentDidMount() {
        if (this.state.isShowing) {
            this._startDelayedHide();
        }
    }

    componentWillReceiveProps(nextProps: Props) {
        this.setState({
            isShowing: nextProps.isShowing,
        });
    }

    componentDidUpdate(prevProps: Props) {
        if (this.props.isShowing && !prevProps.isShowing) {
            this._startDelayedHide();
        }
    }

    componentWillUnmount() {
        // clear any lingering timeouts
        clearTimeout(this.delayedHideTimeOut);
    }

    props: Props;
    delayedHideTimeOut: number;

    _hideToastification = () => {
        this.setState({
            isShowing: false,
        });
    }

    _handleActionClick = (e: Event) => {
        e.preventDefault();

        const action = this.props.onActionClick;

        if (action) {
            action();
        }

        this._hideToastification();
    }

    _handleToastMouseLeave = () => {
        if (this.state.isShowing) {
            this._delayedHide(750);
        }
    }

    _handleToastMouseEnter = () =>{
        this._pauseDelayedHide();
    }

    _pauseDelayedHide = () => {
        // if the user hovered over the toast we freeze it.
        clearTimeout(this.delayedHideTimeOut);
    }

    _startDelayedHide = () => {
        // this is the initial timing of the hide;
        const messageDuration = this.props.actionLabel ? slowDelayTime : fastDelayTime;
        this._delayedHide(messageDuration);
    }

    _delayedHide = (duration: number) => {
        const onComplete = this.props.onComplete;

        // after a certain amount of time (duration) the Toastification hides itself.
        this.delayedHideTimeOut = setTimeout(() => {
            this._hideToastification();

            // fire onComplete callback (if present) when the toastification removal animation is done.
            if (onComplete) {
                setTimeout(function() {
                    onComplete();
                }, animationTime);
            }

        }, duration);
    }

    render() {

        // the es-lint ignores in the destructuring below allow us to easily filter out these props that should not pass to the DOM. These props where already used above.

        const {
            actionLabel,
            className,
            children,
            format,
            isShowing, // eslint-disable-line no-unused-vars
            onActionClick, // eslint-disable-line no-unused-vars
            onComplete, // eslint-disable-line no-unused-vars
            ...filteredProps
        } = this.props;

        const hasIcon = format === 'warning';

        // className builder
        const componentClass = classNames(
            styles.Toastification,
            (hasIcon ? styles.hasIcon : null),
            className
        );

        const MaybeAction = actionLabel ? (
            <span>
                &nbsp;
                <a
                    className={styles.ActionLink}
                    href="#"
                    onClick={this._handleActionClick}
                >
                    {actionLabel}
                </a>
            </span>
        ) : null;

        const MaybeIcon = hasIcon ? (
            <span className={styles.IconWrapper}>
                <InfoIcon className={styles.Icon} />
            </span>
        ) : null;

        const ToastificationComponent = (
            <div className={styles.Wrapper}>
                <div
                    {...filteredProps}
                    className={componentClass}
                    onMouseEnter={this._handleToastMouseEnter}
                    onMouseLeave={this._handleToastMouseLeave}
                >
                    <ParagraphMd
                        className={styles.Content}
                        format="light"
                    >
                        {MaybeIcon}
                        {children}
                        {MaybeAction}
                    </ParagraphMd>
                </div>
            </div>
        );


        return (
                <CSSTransitionGroup
                    transitionAppear
                    transitionLeave
                    transitionEnterTimeout={animationTime}
                    transitionLeaveTimeout={animationTime}
                    transitionAppearTimeout={animationTime}
                    transitionName={{
                        enter: styles.enter,
                        enterActive: styles.enterActive,
                        leave: styles.leave,
                        leaveActive: styles.leaveActive,
                        appear: styles.appear,
                        appearActive: styles.appearActive,
                    }}
                >
                    {this.state.isShowing ? ToastificationComponent : null}
                </CSSTransitionGroup>
        );
    }
}

Toastification.displayName = displayName;
export default Toastification;
