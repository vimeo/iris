import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonToggleState } from './ButtonToggleState';
import { Plus, Checkmark, DismissX } from '../Icons';

const followText = 'Follow';
const unfollowText = 'Unfollow';
const followingText = 'Following';

const connectText = 'Connect';
const disconnectText = 'Disconnect';
const connectedText = 'Connected';

storiesOf('components/Button', module).add('toggle state', () => (
  <ButtonToggleStateDocs />
));

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
        offIcon={<Plus />}
        offStateText={followText}
        onIcon={<Checkmark />}
        onStateText={followingText}
        onClick={this.followToggle}
        turnOffActionText={unfollowText}
        turnOffIcon={<DismissX />}
      />
      <ButtonToggleState
        format="primary"
        isActive={this.state.following}
        offIcon={<Plus />}
        offStateText={followText}
        onIcon={<Checkmark />}
        onStateText={followingText}
        onClick={this.followToggle}
        turnOffActionText={unfollowText}
        turnOffIcon={<DismissX />}
      />

      <ButtonToggleState
        format="primaryOutline"
        isActive={this.state.connected}
        offIcon={<Plus />}
        offStateText={connectText}
        onIcon={<Checkmark />}
        onStateText={connectedText}
        onClick={this.connectToggle}
        turnOffActionText={disconnectText}
        turnOffIcon={<DismissX />}
      />
      <ButtonToggleState
        format="primary"
        isActive={this.state.connected}
        offIcon={<Plus />}
        offStateText={connectText}
        onIcon={<Checkmark />}
        onStateText={connectedText}
        onClick={this.connectToggle}
        turnOffActionText={disconnectText}
        turnOffIcon={<DismissX />}
      />
    </div>
  );
}
