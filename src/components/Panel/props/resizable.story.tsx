import React, { useState } from 'react';

import { Panel } from '../Panel';

import { Button } from '../../../components';
import { Layout } from '../../../storybook';

export default {
  component: Panel,
  title: 'components/Panel/props',
};
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
