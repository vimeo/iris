import React, { ReactNode, Component } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Transition } from 'react-transition-group';

interface Props {
  animateOpenOnMount?: boolean;
  children: ReactNode;
  isHidden: boolean;
}

interface State {
  maxHeight: number;
}

const WrapperStyled = styled.div<{
  isHidden: boolean;
  ref: any;
}>`
  overflow-y: hidden;
  transition: all 200ms ease-in-out;
`;

const maxHeight = height => () => ({ maxHeight: height });

export class SlideUpDown extends Component<Props, State> {
  static defaultProps = { animateOpenOnMount: false };
  readonly state: Readonly<State> = { maxHeight: 0 };
  private ref: HTMLDivElement;

  componentDidMount = () =>
    !this.props.isHidden && this.setState(maxHeight(this.height()));

  componentDidUpdate = (pProps: Props) =>
    this.props.children !== pProps.children &&
    !this.props.isHidden &&
    this.setState(maxHeight(this.height()));

  private height = () =>
    this.ref instanceof HTMLDivElement ? this.ref.scrollHeight : 1000;

  render = () => (
    <Transition
      appear={this.props.animateOpenOnMount}
      in={!this.props.isHidden}
      timeout={200}
      mountOnEnter
      unmountOnExit
    >
      {state => (
        <WrapperStyled
          ref={(div: HTMLDivElement) => (this.ref = div)}
          isHidden={this.props.isHidden}
          data-animation-wrapper
          style={
            {
              entering: { maxHeight: 0 },
              entered: { maxHeight: rem(this.state.maxHeight) },
              exiting: { maxHeight: 0 },
            }[state]
          }
        >
          {this.props.children}
        </WrapperStyled>
      )}
    </Transition>
  );
}
