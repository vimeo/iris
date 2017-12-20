// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './SlideUpDownAnimation.scss';
import { findDOMNode } from 'react-dom';
import anime from 'animejs';

/*
This component uses JS to animate height to ensure a consistant animation speed and feel across a variety of unkown element heights.
*/

type Props = {
    animateOpenOnMount?: boolean,
    children: React$Element<*>,
    speed: Number;
};

class SlideUpDownAnimation extends React.Component {

    componentDidMount() {
        this._slideDown();
    }

    props: Props;

    componentDidEnter(callback: any) {
        this._slideDown(callback);
    }

    componentWillLeave(callback: any) {
        this._slideUp(callback);
    }

    _slideDown = (callback: any) => {
        const el = findDOMNode(this);

        if (el instanceof HTMLDivElement) {
            const elContentHeight = el.scrollHeight;
            const animationComplete = () => {
                if (el.style) {
                    el.style.overflow = 'visible';
                }

                if (typeof callback === 'function') {
                    callback();
                }
            };

            if (elContentHeight) {
                anime({
                    targets: [el],
                    duration: this.props.speed,
                    easing: 'easeInQuart',
                    maxHeight: elContentHeight,
                    opacity: 1,
                    complete: animationComplete,
                });
            }
        }
    }

    _slideUp(callback: any) {
        const el = findDOMNode(this);
        if (el instanceof HTMLDivElement) {

            el.style.overflow = 'hidden';

            const animationComplete = () => {
                if (typeof callback === 'function') {
                    callback();
                }
            };

            const closingSpeed = typeof this.props.speed === 'number' && this.props.speed / 2;

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
                (this.props.animateOpenOnMount ? styles.animateOpenOnMount : null),
            );

        return (
                <div className={componentClass}>
                    {this.props.children}
                </div>
        );
    }
}

export default SlideUpDownAnimation;
