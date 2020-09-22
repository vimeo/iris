import React from 'react';

import { Password } from './Password';

import { Layout } from '../../../storybook';

export default { title: 'Components|Inputs/Text/' };

export function PasswordInput() {
  return (
    <Layout.StoryVertical>
      <Password />
      <Password label="Input (Password)" />
      <Password label="Input (Password)" floating />
    </Layout.StoryVertical>
  );
}
