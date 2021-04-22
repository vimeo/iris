import React from 'react';
import styled from 'styled-components';

import { Tabs as T } from './Tabs';

import { Header, Paragraph } from '../../typography';

export default { title: 'layout/Tabs/Props', component: T };

const Tabs = styled(T)`
  max-width: 40rem;
`;

export function Variant() {
  return (
    <Tabs variant="inlay" style={{ maxWidth: '40rem' }}>
      <Tabs.Panel
        label="Tab 0"
        onActivate={() => console.log('Clicked Tab 0')}
      >
        <Header size="2">variant="inlay" - Tab 0</Header>
        <Paragraph size="2">Lorem ipsum dolor sit amet.</Paragraph>
        <img src="http://placekitten.com/1000/400" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 1"
        active
        onActivate={() => console.log('Clicked Tab 1')}
      >
        <Header size="2">variant="inlay" - Tab 1</Header>
        <Paragraph size="2">Lorem ipsum dolor sit amet.</Paragraph>
        <img src="http://placekitten.com/1000/500" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 2"
        onActivate={() => console.log('Clicked Tab 2')}
      >
        <Header size="2">variant="inlay" - Tab 2</Header>
        <Paragraph size="2">Lorem ipsum dolor sit amet.</Paragraph>
        <img src="http://placekitten.com/1000/450" width="100%" />
      </Tabs.Panel>
    </Tabs>
  );
}

export function Pill() {
  return (
    <Tabs pill variant="inlay" style={{ maxWidth: '40rem' }}>
      <Tabs.Panel
        label="Tab 0"
        onActivate={() => console.log('Clicked Tab 0')}
      >
        <Header size="2">pill - variant="inlay" - Tab 0</Header>
        <Paragraph size="2">Lorem ipsum dolor sit amet.</Paragraph>
        <img src="http://placekitten.com/1000/400" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 1"
        active
        onActivate={() => console.log('Clicked Tab 1')}
      >
        <Header size="2">pill - variant="inlay" - Tab 1</Header>
        <Paragraph size="2">Lorem ipsum dolor sit amet.</Paragraph>
        <img src="http://placekitten.com/1000/500" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 2"
        onActivate={() => console.log('Clicked Tab 2')}
      >
        <Header size="2">pill - variant="inlay" - Tab 2</Header>
        <Paragraph size="2">Lorem ipsum dolor sit amet.</Paragraph>
        <img src="http://placekitten.com/1000/450" width="100%" />
      </Tabs.Panel>
    </Tabs>
  );
}
