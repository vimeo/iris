import React from 'react';
import styled from 'styled-components';

import { Panel as PanelIris } from '../../Panel';

import { TranscriptTabs } from './TranscriptTabs/TranscriptTabs';

export function TranscriptPanel({
  active,
  children = null,
  data,
  onChange,
  currentTime,
}) {
  const content = (
    <TranscriptTabs
      data={data}
      onChange={onChange}
      currentTime={currentTime}
    />
  );

  return (
    <Panel active={active} content={content} screen={false}>
      {children}
    </Panel>
  );
}

const Panel = styled(PanelIris)`
  min-width: 22rem;
`;
