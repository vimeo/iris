import React, { useState } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Panel } from './Panel';

import { Button } from '../../components';
import { Layout } from '../../storybook';

export default { title: 'layout/Panel' };

export function Right() {
  return (
    <Layout.StoryVertical>
      <Panel
        content={PanelContent}
        onOpen={() => console.log('open')}
        onClose={() => console.log('close')}
      >
        <Button>Open Panel</Button>
      </Panel>
    </Layout.StoryVertical>
  );
}

export function Left() {
  return (
    <Layout.StoryVertical>
      <Panel
        attach="left"
        content={PanelContent}
        onOpen={() => console.log('open')}
        onClose={() => console.log('close')}
      >
        <Button>Open Panel</Button>
      </Panel>
    </Layout.StoryVertical>
  );
}

const PanelContent = <div />;
