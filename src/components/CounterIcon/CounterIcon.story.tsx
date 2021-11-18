import React from 'react';

import { CounterIcon } from './CounterIcon';

import { Layout } from '../../storybook';
import { Play, Collections } from '../../icons';

export default {
  title: 'components/CounterIcon',
  component: CounterIcon,
};

export function CounterIconStory() {
  return (
    <Layout.StoryVertical>
      <CounterIcon icon={<Play />} title="Download Count">
        2.12K
      </CounterIcon>
      <CounterIcon icon={<Collections />} title="Play Count">
        100
      </CounterIcon>
    </Layout.StoryVertical>
  );
}
CounterIconStory.storyName = 'CounterIcon';
