import React from 'react';

import { Password } from './Password';

import { Layout } from '../../../storybook';

/* eslint-disable import/no-default-export */
export default {
  title: 'components|inputs/Text/',
};
/* eslint-enable import/no-default-export */

export function PasswordInput() {
  return (
    <Layout.StoryVertical>
      <Password />
      <Password label="Input (Password)" />
      <Password label="Input (Password)" floating />
    </Layout.StoryVertical>
  );
}
