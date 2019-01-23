import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonLoadingState } from './ButtonLoadingState';
import { SettingsIcon } from '../Icons';

storiesOf('components/Button', module).add(
    'loading state',
    () => <ButtonLoadingStateDocs />,
    {
        info: {
            inline: true,
            propTables: [ButtonLoadingState],
        },
        notes: '',
    },
);

const initialState = { isLoading: true };
type State = Readonly<typeof initialState>;

const handleClick = (prevState: State) => ({
    isLoading: !prevState.isLoading,
});

class ButtonLoadingStateDocs extends Component {
    readonly state: State = initialState;

    _handleClick = () => this.setState(handleClick);

    render = () => (
        <div>
            <ButtonLoadingState
                isLoading={!this.state.isLoading}
                onClick={this._handleClick}
                size="lg"
            >
                Click Me
            </ButtonLoadingState>
            <ButtonLoadingState
                icon={<SettingsIcon />}
                isLoading={this.state.isLoading}
                onClick={this._handleClick}
                format="primaryOutline"
                size="md"
            >
                Click Me
            </ButtonLoadingState>
            <ButtonLoadingState
                icon={<SettingsIcon />}
                isLoading={!this.state.isLoading}
                onClick={this._handleClick}
                format="success"
                size="sm"
            >
                Click Me
            </ButtonLoadingState>
            <ButtonLoadingState
                isLoading={this.state.isLoading}
                onClick={this._handleClick}
                format="secondary"
                size="xs"
            >
                Click Me
            </ButtonLoadingState>
        </div>
    );
}
