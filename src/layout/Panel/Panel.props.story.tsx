import React, { useState } from 'react';

import { Panel } from './Panel';

import { Button } from '../../components';
import { Layout } from '../../storybook';

export default {
  title: 'layout/Panel/props',
};

export function Attach() {
  const [active, setActive] = useState({ right: false, left: false });

  function toggle(side) {
    return () =>
      setActive((active) => {
        const toggled = !active[side];

        if (toggled) console.log('open');
        if (!toggled) console.log('close');

        return { ...active, [side]: !active[side] };
      });
  }

  return (
    <Layout.StoryVertical>
      <Button onClick={toggle('right')}>Open Right Panel</Button>
      <Button onClick={toggle('left')}>Open Left Panel</Button>
      <Panel active={active.right} content={PanelContent} />
      <Panel
        attach="left"
        active={active.left}
        content={PanelContent}
      />
    </Layout.StoryVertical>
  );
}
Attach.storyName = 'attach';

export function Active() {
  return (
    <Layout.StoryVertical>
      <Panel active content={PanelContent} />
    </Layout.StoryVertical>
  );
}
Active.storyName = 'active';

const PanelContent = <div />;

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
