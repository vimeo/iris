import React from 'react';

import { BigStat } from './BigStat';

import { Layout } from '../../storybook';

export default {
  title: 'typography/BigStat/props',
  component: BigStat,
};

export function ContentEditable() {
  return (
    <Layout.StoryVertical>
      <BigStat contentEditable>12.2k</BigStat>
    </Layout.StoryVertical>
  );
}
ContentEditable.storyName = 'contentEditable';
