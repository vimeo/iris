import React, { useState } from 'react';

import { TranscriptPanel } from './TranscriptPanel';
import { mockTranscriptSegments } from './util';

import { Button, Input } from '../../../../components';

export default {
  title: 'layout/Panel/examples/TranscriptPanel',
};

const data = mockTranscriptSegments(500);

export function TranscriptPanelStory() {
  return <Test />;
}
TranscriptPanelStory.storyName = 'TranscriptPanel';

function Test() {
  const [currentTime, currentTimeSet] = useState('00:00');
  const [active, activeSet] = useState(true);

  function onChange(start) {
    currentTimeSet(start);
  }

  return (
    <>
      <Input
        // label={'currentTime: ' + currentTime}
        onChange={({ target: { value } }) => currentTimeSet(value)}
        value={currentTime}
        style={{ margin: '1rem 0', maxWidth: '15rem' }}
        size="xl"
      />
      <Button
        onClick={() => activeSet((active) => !active)}
        style={{ margin: '1rem 0' }}
      >
        Toggle Panel
      </Button>
      <TranscriptPanel
        active={active}
        currentTime={currentTime}
        data={data}
        onChange={onChange}
      />
    </>
  );
}

import { Story } from '@storybook/react/dist/ts3.9/client/preview/types-6-0';

import { CaptionStory } from './TranscriptTabs/Caption/Caption.story';
(CaptionStory as Story).storyName = 'Caption';
export { CaptionStory };

import { TranscriptTabsStory } from './TranscriptTabs/TranscriptTabs.story';
(TranscriptTabsStory as Story).storyName = 'TranscriptTabs';
export { TranscriptTabsStory };
