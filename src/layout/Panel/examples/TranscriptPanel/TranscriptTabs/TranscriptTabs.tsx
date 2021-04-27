import React from 'react';
import styled from 'styled-components';

import { Tabs as TabsIris } from '../../../../Tabs/Tabs';
import { Header } from '../../../../../typography';

import { TabSettings } from './TabSettings';
import { TabTranscript } from './TabTranscript';

export function TranscriptTabs({ data, onChange, currentTime }) {
  function gotoTimecode({ start }) {
    onChange(start);
  }

  return (
    <Container>
      <Header size="5">Closed captions</Header>
      <Tabs>
        <Tabs.Panel
          label="Transcript"
          style={{ height: 'calc(100% - 1rem)' }}
        >
          <TabTranscript
            data={data}
            gotoTimecode={gotoTimecode}
            currentTime={currentTime}
          />
        </Tabs.Panel>
        <Tabs.Panel label="Settings">
          <TabSettings />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem 1rem 0;
  height: 100%;
`;

const Tabs = styled(TabsIris)`
  position: relative;
  height: calc(100% - 1.75rem);
`;
