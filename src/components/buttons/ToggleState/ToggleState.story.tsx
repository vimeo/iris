import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonToggleState as B } from '../ToggleState/ToggleState';
import { Plus, Checkmark, DismissX } from '../../../icons';
import { Story } from '../../../storybook';
import styled from 'styled-components';

const ButtonToggleState = styled(B)`
  margin: 0 1rem 1rem 0;
`;

/* eslint-disable import/no-default-export */
export default { title: 'components|buttons/' };
/* eslint-enable import/no-default-export */

export const StateToggle = () => <StateToggleStory />;
function StateToggleStory() {
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
