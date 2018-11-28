import React, { Component, ComponentType, ReactNode, FormEvent } from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import COLORS from '../globals/js/constants/COLORS';
import { ParagraphAltSm } from '../Type';

interface Props {
    maxCharacters: number;
    characterSingularString: string;
    characterPluralString: string;
    format?: 'negative' | 'positive' | 'neutral';
    onInput?: (
        e: Event | FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>,
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

interface CounterStyledProps {
    isErrored: boolean;
    isWarning: boolean;
}

const CounterStyled = styled<CounterStyledProps, any>(
    ({ isWarning, isErrored, ...props }) => <ParagraphAltSm {...props} />,
)`
    margin-bottom: ${rem(1)};

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

const withCharacterCounter = <P extends {}>(
    WrappedComponent: ComponentType<
        P & {
            onInput?: (
                e:
                    | Event
                    | FormEvent<HTMLInputElement>
                    | FormEvent<HTMLTextAreaElement>,
            ) => void;
            format?: 'negative' | 'positive' | 'neutral';
            preMessage: ReactNode;
        }
    >,
) =>
    class extends Component<P & Props, State> {
        constructor(props: P & Props) {
            super(props);
            this.state = {
                isErrored: false,
                isWarning: false,
                remainingCharacters: this.props.maxCharacters,
                format: this.props.format,
            };
        }

        _checkIfWarningState = (remainingCharacters: number) => {
            const isWarning =
                remainingCharacters <= this.props.warningThreshold &&
                remainingCharacters > -1;

            this.setState({ isWarning });
        };

        _enterErrorState = () => {
            this.setState({
                isErrored: true,
                isWarning: false,
            });

            if (typeof this.props.onError === 'function') {
                this.props.onError();
            }
        };

        _resolveErrorState = () => {
            this.setState({
                isErrored: false,
            });

            if (typeof this.props.onResolve === 'function') {
                this.props.onResolve();
            }
        };

        _onInput = (e: Event) => {
            if (
                e.target instanceof HTMLInputElement ||
                e.target instanceof HTMLTextAreaElement
            ) {
                const thisFieldValueCount = e.target.value.length;
                const newRemainingCharacters =
                    this.props.maxCharacters - thisFieldValueCount;
                const isErrorState = newRemainingCharacters < 0;

                if (this.state.isErrored && !isErrorState) {
                    this._resolveErrorState();
                } else if (!this.state.isErrored) {
                    this._checkIfWarningState(newRemainingCharacters);

                    if (isErrorState) {
                        this._enterErrorState();
                    }
                }

                this.setState({
                    remainingCharacters: newRemainingCharacters,
                    format: isErrorState ? 'negative' : this.props.format,
                });
            }

            if (typeof this.props.onInput === 'function') {
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
            } = this.props as Props;

            const charactersString =
                this.state.remainingCharacters == 1 ||
                this.state.remainingCharacters == -1
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
                    onInput={this._onInput}
                    format={this.state.format}
                    preMessage={CounterElement}
                />
            );
        }
    };

export default withCharacterCounter;
