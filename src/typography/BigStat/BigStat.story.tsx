import React from 'react';

import { BigStat } from './BigStat';

import { Layout } from '../../storybook';

export default { title: 'typography|BigStat/' };

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
