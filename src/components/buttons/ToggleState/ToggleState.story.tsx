import React, { useState } from 'react';
import styled from 'styled-components';

import { ButtonToggleState as B } from '../ToggleState/ToggleState';

import { Header } from '../../../typography';
import { Plus, Checkmark, DismissX } from '../../../icons';

const ButtonToggleState = styled(B)`
  margin: 0 1rem 1rem 0;
`;

export default { title: 'components|buttons/ToggleState' };

export const Common = () => <CommonStory />;
function CommonStory() {
  const [following, setFollowing] = useState(false);
  const toggleFollowing = () => setFollowing(following => !following);

  return (
    <ButtonToggleState
      variant="solid"
      isActive={following}
      onClick={toggleFollowing}
      offStateText="Follow"
      onStateText="Following"
      turnOffActionText="Unfollow"
      offIcon={<Plus />}
      onIcon={<Checkmark />}
      turnOffIcon={<DismissX />}
    />
  );
}

export const AllStates = () => <AllStatesStory />;
function AllStatesStory() {
  return (
    <>
      {/** Primary format, inactive state */}
      <Header size="6">Inactive</Header>
      <ButtonToggleState
        variant="solid"
        isActive={false}
        offStateText="Follow"
        onStateText="Following"
        turnOffActionText="Unfollow"
        offIcon={<Plus />}
        onIcon={<Checkmark />}
        turnOffIcon={<DismissX />}
      />
      <br />
      {/** Primary format, hover state */}
      <Header size="6">Hover</Header>
      <ButtonToggleState
        format="secondary"
        variant="solid"
        offStateText="Unfollow"
        onStateText="Unfollow"
        turnOffActionText="Unfollow"
        offIcon={<DismissX />}
        onIcon={<DismissX />}
        turnOffIcon={<DismissX />}
      />
      <br />
      {/** Primary format, active state */}
      <Header size="6">Active</Header>
      <ButtonToggleState
        variant="solid"
        isActive={true}
        offStateText="Follow"
        onStateText="Following"
        turnOffActionText="Unfollow"
        offIcon={<Plus />}
        onIcon={<Checkmark />}
        turnOffIcon={<DismissX />}
      />
    </>
  );
}

export const Format = () => <FormatStory />;
function FormatStory() {
  const [following, setFollowing] = useState(false);
  const toggleFollowing = () => setFollowing(following => !following);

  return (
    <>
      <ButtonToggleState
        variant="solid"
        isActive={following}
        onClick={toggleFollowing}
        offStateText="Follow"
        onStateText="Following"
        turnOffActionText="Unfollow"
        offIcon={<Plus />}
        onIcon={<Checkmark />}
        turnOffIcon={<DismissX />}
      />
      <ButtonToggleState
        format="secondary"
        variant="solid"
        isActive={following}
        onClick={toggleFollowing}
        offStateText="Follow"
        onStateText="Following"
        turnOffActionText="Unfollow"
        offIcon={<Plus />}
        onIcon={<Checkmark />}
        turnOffIcon={<DismissX />}
      />
    </>
  );
}
