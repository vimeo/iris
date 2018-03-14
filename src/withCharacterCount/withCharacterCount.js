// @flow
/* global ReactClass*/
import React from 'react';
import classNames from 'classnames';
import styles from './withCharacterCounter.scss';
// $FlowFixMe
import { ParagraphAltSm } from '../Type';

type Props = {
    maxCharacters: number,
    characterSingularString: string,
    characterPluralString: string,
    format?: 'negative' | 'positive' | 'neutral',
    onInput?: Function,
    onError?: Function,
    onResolve?: Function,
    warningThreshold?: number,
};

function withCharacterCounter(WrappedComponent: ReactClass<any>) {
    return class extends React.Component {

        constructor(props: Props) {
            super(props);
            this.state = {
                remainingCharacters: props.maxCharacters,
                isErrored: false,
                isWarning: false,
                fieldFormat: props.format,
            };
        }

        state: Object;
        props: Props;
        defaultProps: Props;


        _checkIfWarningState = (remainingCharacters: number) => {
            const warningThreshold = this.props.warningThreshold || 5;
            const isWarningState = remainingCharacters <= warningThreshold && remainingCharacters > -1;

            this.setState({
                isWarning: isWarningState,
            });

        }

        _enterErrorState = () => {
            this.setState({
                isErrored: true,
                isWarning: false,
            });

            if (typeof this.props.onError === 'function') {
                this.props.onError();
            }
        }

        _resolveErrorState = () => {
            this.setState({
                isErrored: false,
            });

            if (typeof this.props.onResolve === 'function') {
                this.props.onResolve();
            }
        }

        _onInput = (e: Event) => {

            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
                const thisFieldValueCount = e.target.value.length;
                const newRemainingCharacters = this.props.maxCharacters - thisFieldValueCount;
                const isErrorState = newRemainingCharacters < 0;

                if (this.state.isErrored && !isErrorState) {
                    this._resolveErrorState();
                }
                else if (!this.state.isErrored) {
                    this._checkIfWarningState(newRemainingCharacters);

                    if (isErrorState) {
                        this._enterErrorState();
                    }
                }

                this.setState({
                    remainingCharacters: newRemainingCharacters,
                    fieldFormat: isErrorState ? 'negative' : this.props.format,
                });
            }

            if (typeof this.props.onInput === 'function') {
                this.props.onInput();

            }
        }


        render() {
            const {
                characterSingularString = 'character',
                characterPluralString = 'characters',
                format, // eslint-disable-line no-unused-vars
                maxCharacters, // eslint-disable-line no-unused-vars
                onInput, // eslint-disable-line no-unused-vars
                warningThreshold, // eslint-disable-line no-unused-vars
                ... filteredProps
            } = this.props;

            const counterClass = classNames(
                styles.CharacterCounter,
                styles.overrideStyles,
                (this.state.isWarning ? styles.isWarning : null),
                (this.state.isErrored ? styles.isError : null)
            );

            const charactersString = this.state.remainingCharacters !== 1 || this.state.remainingCharacters !== -1 ? characterPluralString : characterSingularString;

            const CounterElement = (
                <ParagraphAltSm
                    className={counterClass}
                >
                    {`${this.state.remainingCharacters} ${charactersString}`}
                </ParagraphAltSm>
            );

            return (
                    <WrappedComponent
                        {...filteredProps}
                        onInput={this._onInput}
                        format={this.state.fieldFormat}
                        preMessage={CounterElement}
                    />
            );
        }
    };
}


export default withCharacterCounter;
