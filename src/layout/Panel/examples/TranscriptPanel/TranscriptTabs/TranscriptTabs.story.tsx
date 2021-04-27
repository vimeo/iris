import React, { useState } from 'react';

import { TranscriptTabs } from './TranscriptTabs';

import { mockTranscriptSegments } from '../util';

const data = mockTranscriptSegments();

export function TranscriptTabsStory() {
  const [currentTime, currentTimeSet] = useState(0);

  function onChange(start) {
    currentTimeSet(start);
  }

  return (
    <div style={{ height: '70vh' }}>
      <TranscriptTabs
        data={data}
        onChange={onChange}
        currentTime={currentTime}
      />
    </div>
  );
}
