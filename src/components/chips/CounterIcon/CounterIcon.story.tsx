import React from 'react';

import { CounterIcon } from './CounterIcon';

import { Layout } from '../../../storybook';
import { Play, Collections } from '../../../icons';

/* eslint-disable import/no-default-export */
export default { title: 'components|chips/CounterIcon' };
/* eslint-enable import/no-default-export */

export function Common() {
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
