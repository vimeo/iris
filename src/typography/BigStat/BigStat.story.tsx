import React from 'react';

import { BigStat } from './BigStat';

import { Layout } from '../../storybook';

export default { title: 'typography/BigStat', component: BigStat };

export function Common({ args }) {
  return (
    <Layout.StoryVertical>
      <BigStat {...args}>12.2k</BigStat>
    </Layout.StoryVertical>
  );
}
Common.storyName = 'BigStat';
