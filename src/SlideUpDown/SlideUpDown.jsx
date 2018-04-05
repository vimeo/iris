// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './SlideUpDown.scss';
import { Transition } from 'react-transition-group';
import { findDOMNode } from 'react-dom';
import anime from 'animejs';

/*
This component uses JS to animate height to ensure a consistant animation speed and feel across a variety of unkown element heights.
*/

type Props = {
    animateOpenOnMount?: boolean,
    children: React$Element<*>,
    speed: Number,
    isHidden: boolean,
};

type State = {
    maxHeight: number,
    shouldAnimate: boolean,
};

class SlideUpDown extends React.Component {
    static defaultProps = {
        animateOpenOnMount: false,
        speed: 300,
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            maxHeight: 0,
            shouldAnimate: props.animateOpenOnMount || false,
        };
    }

    state: State;

    componentDidMount() {
        this._slideDown();
    }

    componentDidUpdate(prevProps: Props) {
        // need to reset height if child content changes
        if (this.props.children !== prevProps.children) {
            const newHeight = this._getContentHeight();
            this.setState({
                maxHeight: newHeight,
            });
        }
    }
    state: State;
    props: Props;

    _onEnter = (callback: any) => {
        this._slideDown(callback);
    };

    _onExit = (callback: any) => {
        this._slideUp(callback);
    };

    _getContentHeight = () => {
        const el = findDOMNode(this);

        if (el instanceof HTMLDivElement) {
            const elContentHeight = el.scrollHeight;
            return elContentHeight;
        }

        // fallback for flow to be happy
        return 1000;
    };

    _slideDown = (callback: any) => {
        const el = findDOMNode(this);
        const elContentHeight = this._getContentHeight();

        if (el instanceof HTMLDivElement) {
            const animationComplete = () => {
                if (el.style) {
                    el.style.overflow = 'visible';
                }

                if (typeof callback === 'function') {
                    callback();
                }

                this.setState({
                    maxHeight: elContentHeight,
                });
            };

            // animate if this.state.shouldAnimate (because this.props.animateOpenOnMount was true)if not then just set the component to its final open state and flip this.state.shouldAnimate to true. This powers suppressing the inital animation.

            if (elContentHeight && this.state.shouldAnimate) {
                anime({
                    targets: [el],
                    duration: this.props.speed,
                    easing: 'easeInQuart',
                    maxHeight: elContentHeight,
                    opacity: 1,
                    complete: animationComplete,
                });
            }
            else if (elContentHeight && !this.state.shouldAnimate) {
                el.style.maxHeight = `${elContentHeight}px`;
                el.style.opacity = '1';
                el.style.overflow = 'visible';
                this.setState({
                    shouldAnimate: true,
                });
            }
        }
    };

    _slideUp(callback: any) {
        const el = findDOMNode(this);
        if (el instanceof HTMLDivElement) {
            el.style.overflow = 'hidden';

            const animationComplete = () => {
                if (typeof callback === 'function') {
                    callback();
                }
            };

            const closingSpeed =
                typeof this.props.speed === 'number' && this.props.speed / 2;

            anime({
                targets: [el],
                duration: closingSpeed,
                easing: 'easeOutQuart',
                maxHeight: 0,
                marginBottom: 0,
                opacity: 0,
                complete: animationComplete,
            });
        }
    }

    render() {
        // className builder
        const componentClass = classNames(
            styles.SlideUpDown,
            this.props.animateOpenOnMount ? styles.animateOpenOnMount : null
        );

        return (
            <Transition
                in={!this.props.isHidden}
                onEnter={this._onEnter}
                onExit={this._onExit}
                timeout={this.props.speed}
            >
                <div
                    className={componentClass}
                    style={{ maxHeight: this.state.maxHeight }}
                >
                    {this.props.children}
                </div>
            </Transition>
        );
    }
}

export default SlideUpDown;
