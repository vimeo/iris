import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonToggleState } from './ButtonToggleState';
import { Plus, Checkmark, DismissX } from '../Icons';
import { Story } from '../../.storybook/Story';
import styled from 'styled-components';

const Zorp = styled(ButtonToggleState)`
  margin: 0 1rem 1rem 0;
`;

const followText = 'Follow';
const unfollowText = 'Unfollow';
const followingText = 'Following';

const connectText = 'Connect';
const disconnectText = 'Disconnect';
const connectedText = 'Connected';

const componentName = 'Button';

storiesOf('components/Button', module).add('toggle state', () => (
  <Story title={componentName} subTitle="Toggle State">
    <ButtonToggleStateDocs />
  </Story>
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
    <>
      <Zorp
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
      <Zorp
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
      <Zorp
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
      <Zorp
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
    </>
  );
}
