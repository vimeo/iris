import React, { useState } from 'react';

import { Panel } from '../Panel';

import { Button } from '../..';
import { Layout } from '../../../storybook';

export function Resizable() {
  const [active, activeSet] = useState(true);
  const toggle = () => activeSet((active) => !active);
  const content = <div />;

  return (
    <Layout.StoryVertical>
      <Button onClick={toggle}>Toggle Panel</Button>
      <Panel active={active} content={content} resizable />
    </Layout.StoryVertical>
  );
}
Resizable.storyName = 'resizable';
