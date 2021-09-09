import React from 'react';

import { Panel } from './Panel';

import { Button } from '../../components';
import { Layout } from '../../storybook';

export default {
  title: 'components/Panel/props',
};

export function attach() {
  return (
    <Layout.StoryVertical>
      <Panel content={PanelContent}>
        <Button>Open Right Panel</Button>
      </Panel>
      <Panel attach="left" content={PanelContent}>
        <Button>Open Left Panel</Button>
      </Panel>
    </Layout.StoryVertical>
  );
}
attach.storyName = 'attach';

export function active() {
  return (
    <Layout.StoryVertical>
      <Panel active content={PanelContent} />
    </Layout.StoryVertical>
  );
}
active.storyName = 'active';

const PanelContent = <div />;
