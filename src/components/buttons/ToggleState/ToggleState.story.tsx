import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonToggleState as B } from '../ToggleState/ToggleState';
import { Plus, Checkmark, DismissX } from '../../../icons';
import { Story } from '../../../storybook';
import styled from 'styled-components';

const ButtonToggleState = styled(B)`
  margin: 0 1rem 1rem 0;
`;

const componentName = 'Button';

storiesOf('Components|buttons/', module).add(
  'ToggleState Button',
  () => (
    <Story title={componentName} subTitle="Toggle State">
      <ButtonToggleStateDocs />
    </Story>
  ),
);

const ButtonToggleStateDocs = () => {
  const [following, setFollowing] = useState(false);
  const toggleFollowing = () => setFollowing(following => !following);

  const [connected, setConnected] = useState(false);
  const toggleConnected = () => setConnected(connected => !connected);

  return (
    <>
      <ButtonToggleState
        isActive={following}
        offIcon={<Plus />}
        offStateText={followText}
        onIcon={<Checkmark />}
        onStateText={followingText}
        onClick={toggleFollowing}
        turnOffActionText={unfollowText}
        turnOffIcon={<DismissX />}
      />
      <ButtonToggleState
        isActive={following}
        offIcon={<Plus />}
        offStateText={followText}
        onIcon={<Checkmark />}
        onStateText={followingText}
        onClick={toggleFollowing}
        turnOffActionText={unfollowText}
        turnOffIcon={<DismissX />}
      />
      <ButtonToggleState
        isActive={connected}
        offIcon={<Plus />}
        offStateText={connectText}
        onIcon={<Checkmark />}
        onStateText={connectedText}
        onClick={toggleConnected}
        turnOffActionText={disconnectText}
        turnOffIcon={<DismissX />}
      />
      <ButtonToggleState
        isActive={connected}
        offIcon={<Plus />}
        offStateText={connectText}
        onIcon={<Checkmark />}
        onStateText={connectedText}
        onClick={toggleConnected}
        turnOffActionText={disconnectText}
        turnOffIcon={<DismissX />}
      />
      <ButtonToggleState
        variant="solid"
        isActive={following}
        offIcon={<Plus />}
        offStateText={followText}
        onIcon={<Checkmark />}
        onStateText={followingText}
        onClick={toggleFollowing}
        turnOffActionText={unfollowText}
        turnOffIcon={<DismissX />}
      />
      <ButtonToggleState
        variant="solid"
        isActive={following}
        offIcon={<Plus />}
        offStateText={followText}
        onIcon={<Checkmark />}
        onStateText={followingText}
        onClick={toggleFollowing}
        turnOffActionText={unfollowText}
        turnOffIcon={<DismissX />}
      />
      <ButtonToggleState
        variant="solid"
        isActive={connected}
        offIcon={<Plus />}
        offStateText={connectText}
        onIcon={<Checkmark />}
        onStateText={connectedText}
        onClick={toggleConnected}
        turnOffActionText={disconnectText}
        turnOffIcon={<DismissX />}
      />
      <ButtonToggleState
        variant="solid"
        isActive={connected}
        offIcon={<Plus />}
        offStateText={connectText}
        onIcon={<Checkmark />}
        onStateText={connectedText}
        onClick={toggleConnected}
        turnOffActionText={disconnectText}
        turnOffIcon={<DismissX />}
      />
    </>
  );
};

const followText = 'Follow';
const unfollowText = 'Unfollow';
const followingText = 'Following';

const connectText = 'Connect';
const disconnectText = 'Disconnect';
const connectedText = 'Connected';
