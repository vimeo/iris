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
      <Panel
        content={PanelContent}
        onOpen={() => console.log('open')}
        onClose={() => console.log('close')}
      >
        <Button>Open Right Panel</Button>
      </Panel>
      <Panel
        attach="left"
        content={PanelContent}
        onOpen={() => console.log('open')}
        onClose={() => console.log('close')}
      >
        <Button>Open Left Panel</Button>
      </Panel>
    </Layout.StoryVertical>
  );
}
attach.storyName = 'attach';

export function active() {
  return (
    <Layout.StoryVertical>
      <Panel
        active
        content={PanelContent}
        onOpen={() => console.log('open')}
        onClose={() => console.log('close')}
      />
    </Layout.StoryVertical>
  );
}
active.storyName = 'active';

const PanelContent = <div />;
