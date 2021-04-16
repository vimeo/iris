import React from 'react';

import { Panel } from './Panel';

import { Button } from '../../components';
import { Layout } from '../../storybook';

export default {
  title: 'layout/Panel/Props',
};

export function Attach() {
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

const PanelContent = <div />;
