// @flow
import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import slideUpDown from './SlideUpDownAnimation';

const displayName = 'SlideUpDown';
const defaultProps = {
    animateOpenOnMount: true,
};

type Props = {
    animateOpenOnMount?: boolean,
    children: React$Element<*>,
    isHidden?: boolean,
};

class SlideUpDown extends React.Component {
    static defaultProps: Object;

    constructor(props: Props) {
        super(props);
        this.AnimatedComponent = slideUpDown(props.children);
    }

    props: Props;
    AnimatedComponent: any;

    render() {

        const AnimatedComponent = <this.AnimatedComponent animateOpenOnMount={this.props.animateOpenOnMount}/>;

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
