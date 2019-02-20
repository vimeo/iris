import React, {
  Component,
  ComponentType,
  ReactNode,
  FormEvent,
} from 'react';
import styled, { css } from 'styled-components';
import * as COLORS from '../Color/Color';
import { ParagraphAltSm } from '../Type';
import { fnGuard } from '../Utils/fnGuard';

interface Props {
  maxCharacters: number;
  characterSingularString: string;
  characterPluralString: string;
  format?: 'negative' | 'positive' | 'neutral';
  onInput?: (
    e:
      | Event
      | FormEvent<HTMLInputElement>
      | FormEvent<HTMLTextAreaElement>,
  ) => void;
  onError?: () => void;
  onResolve?: () => void;
  warningThreshold?: number;
}

interface State {
  isErrored: boolean;
  isWarning: boolean;
  remainingCharacters: number;
  format?: 'negative' | 'positive' | 'neutral';
}

const CounterStyled = styled(({ isWarning, isErrored, ...props }) => (
  <ParagraphAltSm {...props} />
))`
  margin-top: 0.25rem;

  ${props =>
    props.isWarning &&
    css`
      font-weight: 600;
      color: ${COLORS.AstroGranite};
    `};

  ${props =>
    props.isErrored &&
    css`
      font-weight: 600;
      color: ${COLORS.SunsetOrange};
    `};
`;

export const withCharacterCounter = <P extends {}>(
  WrappedComponent: ComponentType<
    P & {
      onInput?: (
        e:
          | Event
          | FormEvent<HTMLInputElement>
          | FormEvent<HTMLTextAreaElement>,
      ) => void;
      format?: 'negative' | 'positive' | 'neutral';
      preMessage?: ReactNode;
    }
  >,
) =>
  class extends Component<P & Props, State> {
    state: State = {
      isErrored: false,
      isWarning: false,
      remainingCharacters: this.props.maxCharacters,
      format: this.props.format,
    };

    checkIfWarningState = (remainingCharacters: number) => {
      const isWarning =
        remainingCharacters <= this.props.warningThreshold &&
        remainingCharacters > -1;

      this.setState({ isWarning });
    };

    enterErrorState = () =>
      this.setState(errored, fnGuard(this.props, 'onError'));

    resolveErrorState = () =>
      this.setState(resolved, fnGuard(this.props, 'onResolve'));

    onInput = (e: Event) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        const newRemainingCharacters =
          this.props.maxCharacters - e.target.value.length;
        const isErrorState = newRemainingCharacters < 0;

        if (this.state.isErrored && !isErrorState) {
          this.resolveErrorState();
        } else if (!this.state.isErrored) {
          this.checkIfWarningState(newRemainingCharacters);

          if (isErrorState) {
            this.enterErrorState();
          }
        }

        this.setState({
          remainingCharacters: newRemainingCharacters,
          format: isErrorState ? 'negative' : this.props.format,
        });
      }

      if (this.props.onInput) {
        this.props.onInput(e);
      }
    };

    render() {
      const {
        characterSingularString = 'character',
        characterPluralString = 'characters',
        format = 'neutral',
        maxCharacters,
        onInput,
        warningThreshold = 5,
        ...filteredProps
      } = this.props as any;
      // Storybook oddly has a problem here

      const charactersString =
        this.state.remainingCharacters === 1 ||
        this.state.remainingCharacters === -1
          ? characterSingularString
          : characterPluralString;

      const CounterElement = (
        <CounterStyled
          isErrored={this.state.isErrored}
          isWarning={this.state.isWarning}
        >
          {`${this.state.remainingCharacters} ${charactersString}`}
        </CounterStyled>
      );

      return (
        <WrappedComponent
          {...filteredProps}
          onInput={this.onInput}
          format={this.state.format}
          preMessage={CounterElement}
        />
      );
    }
  };

const resolved = { isErrored: false };
const errored = { isErrored: true, isWarning: false };
