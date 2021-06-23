import React from 'react';

import { BigStat } from './BigStat';

import { Layout } from '../../storybook';

export default { title: 'typography/BigStat', component: BigStat };

export function Common() {
  return (
    <Layout.StoryVertical>
      <BigStat>12.2k</BigStat>
    </Layout.StoryVertical>
  );
}
Common.storyName = 'BigStat';
