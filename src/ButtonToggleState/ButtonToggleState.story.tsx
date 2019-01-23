import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonToggleState } from './ButtonToggleState';
import { PlusIcon } from '../Icons';
import { CheckIcon } from '../Icons';
import { DeleteIcon } from '../Icons';

const followText = 'Follow';
const unfollowText = 'Unfollow';
const followingText = 'Following';

const connectText = 'Connect';
const disconnectText = 'Disconnect';
const connectedText = 'Connected';

storiesOf('components/Button', module).add(
    'toggle state',
    () => <ButtonToggleStateDocs />,
    {
        info: {
            inline: true,
            propTables: [ButtonToggleState],
        },
    },
);

class ButtonToggleStateDocs extends Component {
    state = { following: false, connected: false };

    followToggle = () =>
        this.setState({
            following: !this.state.following,
        });

    connectToggle = () =>
        this.setState({
            connected: !this.state.connected,
        });

    render = () => (
        <div data-code>
            <ButtonToggleState
                format="primaryOutline"
                isActive={this.state.following}
                offIcon={<PlusIcon />}
                offStateText={followText}
                onIcon={<CheckIcon />}
                onStateText={followingText}
                onClick={this.followToggle}
                turnOffActionText={unfollowText}
                turnOffIcon={<DeleteIcon />}
            />
            <ButtonToggleState
                format="primary"
                isActive={this.state.following}
                offIcon={<PlusIcon />}
                offStateText={followText}
                onIcon={<CheckIcon />}
                onStateText={followingText}
                onClick={this.followToggle}
                turnOffActionText={unfollowText}
                turnOffIcon={<DeleteIcon />}
            />

            <ButtonToggleState
                format="primaryOutline"
                isActive={this.state.connected}
                offIcon={<PlusIcon />}
                offStateText={connectText}
                onIcon={<CheckIcon />}
                onStateText={connectedText}
                onClick={this.connectToggle}
                turnOffActionText={disconnectText}
                turnOffIcon={<DeleteIcon />}
            />
            <ButtonToggleState
                format="primary"
                isActive={this.state.connected}
                offIcon={<PlusIcon />}
                offStateText={connectText}
                onIcon={<CheckIcon />}
                onStateText={connectedText}
                onClick={this.connectToggle}
                turnOffActionText={disconnectText}
                turnOffIcon={<DeleteIcon />}
            />
        </div>
    );
}
