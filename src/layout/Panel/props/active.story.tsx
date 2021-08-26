import React from 'react';

import { Panel } from '../Panel';

import { Layout } from '../../../storybook';

export function Active() {
  const content = <div />;

  return (
    <Layout.StoryVertical>
      <Panel active content={content} />
    </Layout.StoryVertical>
  );
}
Active.storyName = 'active';
