// @flow
import React from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import TetherComponent from 'react-tether';
import { TransitionGroup } from 'react-transition-group';
import anime from 'animejs';

import Tooltip from '../Tooltip/Tooltip';
import styles from './TooltipOverlay.scss';


const displayName = 'TooltipOverlay';
const AnimationDuration = 300;

type Props = {
    children: React$Element<*>,
    className?: string,
    attachment?: 'top' | 'right' | 'left' | 'bottom',
    isShowing: boolean,
    href: string,
    onBlur: () => void,
    onClick: () => void,
    onFocus: () => void,
    onMouseEnter: () => void,
    onMouseLeave: () => void,
    tooltipText: string,
    triggerOnClick: boolean,
};

const defaultProps = {
    attachment: 'top',
    href: '#',
};

class TooltipOverlay extends React.Component {
    static defaultProps: Object;

    constructor(props: Props) {
        super(props);
        this.state = {
            isAnimating: false,
            isShowing: props.isShowing,
            isHovered: false,
        };
    }

    state: Object;

    componentDidUpdate(prevProps: Object, prevState: Object) {
        if (this.state.isShowing && !prevState.isShowing) {
            this.fadeIn();
        }
        else if (!this.state.isShowing && prevState.isShowing) {
            this.fadeOut();
        }
    }

    props: Props;
    overlay: any;

// Functions

    // the isAnimating state blocks state changes when the animation is active
    animationStart = () => {
        this.setState({
            isAnimating: true,
        });
    }

    animationEnd = () => {
        this.setState({
            isAnimating: false,
        });
    }

    fadeIn = () => {
        const el = this.overlay;
        if (el instanceof HTMLElement) {
            this.animationStart();
            anime({
                complete: this.animationEnd,
                targets: [el],
                delay: 0,
                duration: AnimationDuration,
                easing: 'easeInQuart',
                translateY: 0,
                opacity: 1,
            });
        }
    }

    fadeOut = () => {
        const el = this.overlay;
        if (el instanceof HTMLElement) {
            this.animationStart();
            anime({
                complete: this.animationEnd,
                targets: [el],
                duration: AnimationDuration,
                easing: 'easeOutQuart',
                translateY: 2,
                opacity: 0,
            });
        }
    }

    showTooltip = () => {
        this.setState({
            isShowing: true,
        });
    }

    hideTooltip = () => {
        this.setState({
            isShowing: false,
        });
    }

    toggleTooltip = () => {
        this.setState({
            isShowing: !this.state.isShowing,
        });
    }

// Event Handlers
    handleClick = (e: Event) => {
        if (this.props.triggerOnClick) {
            if (typeof this.onClick === 'function') {
                this.props.onClick();
            }
            this.toggleTooltip();
        }

        if (this.props.href === '#') {
            e.preventDefault();
        }
    }

    handleMouseEnter = () => {
        this.setState({
            isHovered: true,
        });

        if (typeof this.props.onMouseEnter === 'function') {
            this.props.onMouseEnter();
        }

        if (!this.props.triggerOnClick) {
            const thisComponent = findDOMNode(this);
            const el = thisComponent instanceof HTMLElement ? thisComponent.querySelector('[data-tooltip-trigger]') : null;
            if (el !== document.activeElement) {
                this.showTooltip();
            }
        }
    }

    handleMouseLeave = () => {
        this.setState({
            isHovered: false,
        });

        if (typeof this.props.onMouseLeave === 'function') {
            this.props.onMouseLeave();
        }

        const thisComponent = findDOMNode(this);
        const el = thisComponent instanceof HTMLElement ? thisComponent.querySelector('[data-tooltip-trigger]') : null;
        if (!this.props.triggerOnClick && el !== document.activeElement) {
            // if the animation isn't still running hide the tooltip on mouseLeave
            if (this.state.isShowing && !this.state.isAnimating) {
                this.hideTooltip();
            }
            // if the animation IS still running, wait for the animation duration and check if we are still not hovering. We do this to prevent tooltip blinking if the animated tooltip passes under the cursor durnng animation and temporarily fires mouseLeave.
            else if (this.state.isShowing && this.state.isAnimating) {
                setTimeout(function() {
                    if (this.state.isShowing && !this.state.isAnimating && !this.state.isHovered) {
                        this.hideTooltip();
                    }
                }, AnimationDuration);
            }
        }
    }

    handleFocus = () => {
        if (typeof this.props.onFocus === 'function') {
            this.props.onFocus();
        }

        if (!this.props.triggerOnClick && !this.state.isHovered) {
            this.showTooltip();
        }
    }

    handleBlur = () => {
        if (typeof this.props.onBlur === 'function') {
            this.props.onBlur();
        }
        this.hideTooltip();
    }

    render() {
        const {
            children,
            className,
            attachment,
            href,
            tooltipText,
            triggerOnClick, // eslint-disable-line no-unused-vars
            ...filteredProps
        } = this.props;

        // set up attachment direction and reversal when tooltip hits browser edge
        let tooltipDirection;
        let constraintAttachment;
        let tooltipOffset = '0 0';

        switch (attachment) {
            case 'top':
                tooltipDirection = 'top center';
                constraintAttachment = 'bottom center';
                tooltipOffset = '-2px 0';
                break;
            case 'bottom':
                tooltipDirection = 'bottom center';
                constraintAttachment = 'top center';
                tooltipOffset = '2px 0';
                break;
            case 'right':
                tooltipDirection = 'middle right';
                constraintAttachment = 'middle left';
                break;
            case 'left':
                tooltipDirection = 'middle left';
                constraintAttachment = 'middle right';
                break;
        }

        const tooltipComponent = (
            <Tooltip className={this.state.isAnimating ? styles.blocked : ''}>
                {tooltipText}
            </Tooltip>
        );

        const LinkClass = classNames(
            styles.Link,
            className,
        );

        return (
            <TetherComponent
                attachment={constraintAttachment}
                targetAttachment={tooltipDirection}
                constraints={[{
                    to: 'window',
                    attachment: 'together',
                }]}
                classes={{
                    element: styles.Wrapper,
                }}
                offset={tooltipOffset}
            >
                {/* Element that receives the tooltip */}
                <span className={styles.TriggerWrapper}
                    onClick={this.handleClick}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                >
                    <a
                        {...filteredProps}
                        data-tooltip-trigger
                        aria-label={tooltipText}
                        href={href}
                        className={LinkClass}
                        tabIndex="0"
                    >
                        {children}
                    </a>
                </span>

                {/* Tooltip */}
                <TransitionGroup>
                    <div
                        className={styles.TooltipWrapper}
                        ref={(overlay) => {
                            this.overlay = overlay;
                        }}
                    >
                        {this.state.isShowing ? tooltipComponent : null}
                    </div>
                </TransitionGroup>
            </TetherComponent>
        );
    }
}


TooltipOverlay.defaultProps = defaultProps;
TooltipOverlay.displayName = displayName;

export default TooltipOverlay;
