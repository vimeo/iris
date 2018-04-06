// @flow
import React from 'react';
import styled from 'styled-components';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
// $FlowFixMe
import { rem } from 'polished';
import { Transition } from 'react-transition-group';
import { findDOMNode } from 'react-dom';
/*
This component uses JS to animate height to ensure a consistant animation speed and feel across a variety of unkown element heights.
*/

const ANIMATION_SPEED = 200;

type Props = {
    animateOpenOnMount?: boolean,
    children: React$Element<*>,
    isHidden: boolean,
};

type State = {
    maxHeight: number,
};

const WrapperStyled = styled('div')`
    overflow: hidden;
    transition: all ${ANIMATION_SPEED}ms ease-in-out;
`;

class SlideUpDown extends React.Component {
    static defaultProps = {
        animateOpenOnMount: false,
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            maxHeight: 0,
        };
    }

    state: State;

    componentDidMount() {
        if (!this.props.isHidden) {
            const newHeight = this._getContentHeight();
            this.setState({
                maxHeight: newHeight,
            });
        }
    }

    componentDidUpdate(prevProps: Props) {
        // need to reset height if child content changes
        if (
            this.props.children !== prevProps.children &&
            !this.props.isHidden
        ) {
            const newHeight = this._getContentHeight();
            this.setState({
                maxHeight: newHeight,
            });
        }
    }

    props: Props;

    _getContentHeight = () => {
        const el = findDOMNode(this);

        if (el instanceof HTMLDivElement) {
            const elContentHeight = el.scrollHeight;
            return elContentHeight;
        }

        // fallback for flow to be happy
        return 1000;
    };

    render() {
        const transitionStyles = {
            entering: {
                maxHeight: 0,
            },
            entered: {
                maxHeight: rem(this.state.maxHeight),
            },
            exiting: {
                maxHeight: 0,
            },
        };

        return (
            <Transition
                appear={this.props.animateOpenOnMount}
                in={!this.props.isHidden}
                timeout={ANIMATION_SPEED}
                mountOnEnter
                unmountOnExit
            >
                {state => (
                    <WrapperStyled
                        isHidden={this.props.isHidden}
                        data-animation-wrapper
                        style={{
                            ...transitionStyles[state],
                        }}
                    >
                        {this.props.children}
                    </WrapperStyled>
                )}
            </Transition>
        );
    }
}

export default SlideUpDown;
