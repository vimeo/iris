// @flow
import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import SlideUpDownAnimation from '../SlideUpDownAnimation';

const displayName = 'SlideUpDown';
const defaultProps = {
    speed: 300,
};

type Props = {
    children: React$Element<*>,
    isHidden?: boolean,
    speed: Number;
};

class SlideUpDown extends React.Component {
    static defaultProps: Object;

    constructor(props: Props) {
        super(props);
    }

    props: Props;
    AnimatedComponent: any;

    render() {

        const AnimatedComponent = (
            <SlideUpDownAnimation
                speed={this.props.speed}
                aria-hidden={this.props.isHidden}
            >
                {this.props.children}
            </SlideUpDownAnimation>
        );

        return (
            <TransitionGroup>
                {this.props.isHidden ? null : AnimatedComponent}
            </TransitionGroup>
        );
    }
}

SlideUpDown.displayName = displayName;
SlideUpDown.defaultProps = defaultProps;

export default SlideUpDown;
