// @flow
import React from 'react';
import { findDOMNode } from 'react-dom';
import TetherComponent from 'react-tether';
import { TransitionGroup } from 'react-transition-group';
import anime from 'animejs';

import Tooltip from '../Tooltip/Tooltip';
import styles from './TooltipOverlay.scss';


const displayName = 'TooltipOverlay';

type Props = {
    children: React$Element<*>,
    attachment?: 'top' | 'right' | 'left' | 'bottom',
    isShowing: boolean,
    href: string,
    onBlur: any,
    onClick: any,
    onFocus: any,
    onMouseEnter: any,
    onMouseLeave: any,
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
            isShowing: props.isShowing,
            shouldFocusReapply: true,
            animationBlocked: false,
        };
    }

    state: Object;
    componentDidMount() {
        this.fadeOut();
    }

    componentDidUpdate() {
        if (this.state.isShowing) {
            this.fadeIn();
        }
        else {
            this.fadeOut();
        }
    }

    props: Props;
    overlay: any;

// Functions

    fadeIn = () => {
        const el = this.overlay;
        if (el instanceof HTMLElement) {
            anime({
                targets: [el],
                delay: this.props.triggerOnClick ? 0 : 800,
                duration: 300,
                easing: 'easeInQuart',
                translateY: 0,
                opacity: 1,
            });
        }
    }

    fadeOut = () => {
        const el = this.overlay;
        if (el instanceof HTMLElement) {
            anime({
                targets: [el],
                duration: 350,
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

            // create a state that turns on if clicked to block focus actions
            this.setState({
                shouldFocusReapply: false,
            });
            this.toggleTooltip();
        }

        if (this.props.href === '#') {
            e.preventDefault();
        }
    }

    handleMouseEnter = () => {
        this.setState({
            animationBlocked: false,
        });

        if (typeof this.props.onMouseEnter === 'function') {
            this.props.onMouseEnter();
        }

        if (!this.props.triggerOnClick) {

            const el = findDOMNode(this.refs.trigger);
            if (el instanceof HTMLElement && el !== document.activeElement) {
                this.showTooltip();
            }
        }
    }

    handleMouseLeave = () => {
        if (typeof this.props.onMouseLeave === 'function') {
            this.props.onMouseLeave();
        }

        const el = findDOMNode(this.refs.trigger);
        if (!this.props.triggerOnClick && el !== document.activeElement) {
            if (this.state.isShowing === true) {
                this.hideTooltip();

                this.setState({
                    shaouldFocusReapply: true,
                    animationBlocked: true,
                });
            }
        }
    }

    handleFocus = () => {
        if (typeof this.props.onFocus === 'function') {
            this.props.onFocus();
        }

        const triggerElement = this.refs.trigger;
        const hoveredElement = document.querySelector(triggerElement + ':hover');
        console.log(hoveredElement);

        if (!this.props.triggerOnClick && this.refs.trigger !== hoveredElement) {
            if (this.state.shouldFocusReapply === true) {
                this.setState({
                    shouldFocusReapply: false,
                });
                this.showTooltip();
            }
        }
    }

    handleBlur = () => {
        if (typeof this.props.onBlur === 'function') {
            this.props.onBlur();
        }

        if (this.state.shouldFocusReapply === false) {
            this.setState({
                shouldFocusReapply: true,
            });
        }
        this.hideTooltip();
    }

    render() {
        const {
            children,
            attachment,
            href,
            tooltipText,
        } = this.props;

        // set up attachment direction and reversal when tooltip hits browser edge
        let tooltipDirection;
        let constraintAttachment;

        switch (attachment) {
            case 'top':
                tooltipDirection = 'top center';
                constraintAttachment = 'bottom center';
                break;
            case 'bottom':
                tooltipDirection = 'bottom center';
                constraintAttachment = 'top center';
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
            <Tooltip className={this.state.animationBlocked ? styles.blocked : ''}>
                {tooltipText}
            </Tooltip>
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
                offset="0 0"
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
                        ref="trigger"
                        aria-label={tooltipText}
                        href={href}
                        className={styles.Link}
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
