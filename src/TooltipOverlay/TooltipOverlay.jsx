// @flow
import React from 'react';
import classNames from 'classnames';
import TetherComponent from 'react-tether';
import anime from 'animejs';

import Tooltip from '../Tooltip/Tooltip';
import styles from './TooltipOverlay.scss';


const displayName = 'TooltipOverlay';
const AnimationDuration = 150;
const TooltipOffsetDistance = 4; // pixel offset for tooltip spacing

type Props = {
    children: React$Element<*>,
    className?: string,
    element?: 'a' | 'span',
    attachment?: 'top' | 'right' | 'left' | 'bottom',
    isShowing: boolean,
    href: string,
    onBlur: () => void,
    onClick: () => void,
    onFocus: () => void,
    onMouseEnter: () => void,
    onMouseLeave: () => void,
    tooltipOptions?: Object,
    tooltipText: string,
    triggerOnClick: boolean,
};

const defaultProps = {
    attachment: 'top',
    href: '#',
    element: 'a',
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
            this.tether.enable();
            this.tether.position();
            this.fadeIn();
        }
        else if (!this.state.isShowing && prevState.isShowing) {
            this.fadeOut();
        }
    }

    props: Props;
    overlay: any;
    tether: any;
    menu: any;

// Functions

    fadeIn = () => {

        const el = this.overlay;
        if (el instanceof HTMLElement) {
            anime({
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
        const fadeComplete = () => {
            this.tether.disable();
        };

        if (el instanceof HTMLElement) {
            anime({
                complete: fadeComplete,
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
        if (typeof this.props.onClick === 'function') {
            this.props.onClick();
        }

        if (this.props.triggerOnClick) {
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
            this.showTooltip();
        }
    }

    handleMouseLeave = () => {
        this.setState({
            isHovered: false,
        });

        if (typeof this.props.onMouseLeave === 'function') {
            this.props.onMouseLeave();
        }

        if (!this.props.triggerOnClick) {
            if (this.state.isShowing) {
                this.hideTooltip();
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
            element,
            attachment,
            href,
            tooltipText,
            tooltipOptions,
            triggerOnClick, // eslint-disable-line no-unused-vars
            ...filteredProps
        } = this.props;

        // set up attachment direction and reversal when tooltip hits browser edge
        let tooltipAttachment;
        let tooltipOffset;

        switch (attachment) {
            case 'top':
                tooltipAttachment = 'bottom center';
                tooltipOffset = `${TooltipOffsetDistance}px 0`;
                break;
            case 'right':
                tooltipAttachment = 'middle left';
                tooltipOffset = `0 ${TooltipOffsetDistance * -1}px`;
                break;
            case 'bottom':
                tooltipAttachment = 'top center';
                tooltipOffset = `${TooltipOffsetDistance * -1}px 0`;
                break;
            case 'left':
                tooltipAttachment = 'middle right';
                tooltipOffset = `0 ${TooltipOffsetDistance}px`;
                break;
        }

        const LinkClass = classNames(
            styles.Link,
            className,
        );

        const TooltipWrapperClass = classNames(
            styles.TooltipWrapper,
            (this.state.isShowing ? styles.isShowing : null),
        );

        const tooltipComponent = (
            <div
                className={TooltipWrapperClass}
                ref={(overlay) => {
                    this.overlay = overlay;
                }}
            >
                <Tooltip>
                    {tooltipText}
                </Tooltip>
            </div>
        );

        const WrapperElement = element || 'a';


        return (
            <div className={styles.TriggerWrapper}>
                <TetherComponent
                    attachment={tooltipAttachment}
                    constraints={[{
                        to: 'window',
                        attachment: 'together',
                    }]}
                    classes={{
                        element: styles.Wrapper,
                    }}
                    enabled={false}
                    ref={(tether) => {
                        this.tether = tether;
                    }}
                    offset={tooltipOffset}
                    {...tooltipOptions}
                >
                    <WrapperElement
                        {...filteredProps}
                        onClick={this.handleClick}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        data-tooltip-trigger
                        aria-label={tooltipText}
                        href={href}
                        className={LinkClass}
                        tabIndex="0"
                    >
                        {children}
                    </WrapperElement>
                    {this.state.isShowing && tooltipComponent}
                </TetherComponent>
            </div>
        );
    }
}


TooltipOverlay.defaultProps = defaultProps;
TooltipOverlay.displayName = displayName;

export default TooltipOverlay;
