import React from 'react';

import { BigStat } from './BigStat';

import { Layout } from '../../storybook';

/* eslint-disable import/no-default-export */
export default { title: 'typography|BigStat/' };
/* eslint-enable import/no-default-export */

export function Common() {
  return (
    <Layout.StoryVertical>
      <BigStat>12.2k</BigStat>
    </Layout.StoryVertical>
  );
}

export function ContentEditable() {
  return (
    <Layout.StoryVertical>
      <BigStat contentEditable>12.2k</BigStat>
    </Layout.StoryVertical>
  );
}
