import React, { useState } from 'react';

import { Panel } from '../Panel';

import { Button } from '../../../components';
import { Layout } from '../../../storybook';

export default {
  component: Panel,
  title: 'components/Panel/props',
};
export function Attach() {
  const [active, setActive] = useState({ right: false, left: false });

  const content = <div />;

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
      <Panel active={active.right} content={content} />
      <Panel attach="left" active={active.left} content={content} />
    </Layout.StoryVertical>
  );
}
Attach.storyName = 'attach';
