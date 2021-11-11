import React from 'react';
import styled from 'styled-components';

import { Tabs as T } from './Tabs';

import { Header, Paragraph } from '../../typography';

export default { title: 'components/Tabs/props', component: T };

const Tabs = styled(T)`
  max-width: 40rem;
  min-height: 30rem;
  margin-bottom: 2rem;
`;

export function Format() {
  return (
    ['basic', 'soft', 'alternative', 'secondary', 'primary'] as const
  ).map((format) => (
    <Tabs format={format}>
      <Tabs.Panel
        label="Tab 0"
        onActivate={() => console.log('Clicked Tab 0')}
      >
        <Paragraph size="2">Lorem kittsum dolor sit ameow.</Paragraph>
        <img src="http://placekitten.com/1000/400" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 1"
        active
        onActivate={() => console.log('Clicked Tab 1')}
      >
        <Paragraph size="2">Lorem kittsum dolor sit ameow.</Paragraph>
        <img src="http://placekitten.com/1000/500" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 2"
        onActivate={() => console.log('Clicked Tab 2')}
      >
        <Paragraph size="2">Lorem kittsum dolor sit ameow.</Paragraph>
        <img src="http://placekitten.com/1000/450" width="100%" />
      </Tabs.Panel>
    </Tabs>
  ));
}
Format.storyName = 'format';

export function Variant() {
  return (
    <Tabs variant="inlay">
      <Tabs.Panel
        label="Tab 0"
        onActivate={() => console.log('Clicked Tab 0')}
      >
        <Paragraph size="2">Lorem kittsum dolor sit ameow.</Paragraph>
        <img src="http://placekitten.com/1000/400" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 1"
        active
        onActivate={() => console.log('Clicked Tab 1')}
      >
        <Paragraph size="2">Lorem kittsum dolor sit ameow.</Paragraph>
        <img src="http://placekitten.com/1000/500" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 2"
        onActivate={() => console.log('Clicked Tab 2')}
      >
        <Paragraph size="2">Lorem kittsum dolor sit ameow.</Paragraph>
        <img src="http://placekitten.com/1000/450" width="100%" />
      </Tabs.Panel>
    </Tabs>
  );
}
Variant.storyName = 'variant';

export function Pill() {
  return (
    <Tabs pill variant="inlay">
      <Tabs.Panel
        label="Tab 0"
        onActivate={() => console.log('Clicked Tab 0')}
      >
        <Paragraph size="2">Lorem kittsum dolor sit ameow.</Paragraph>
        <img src="http://placekitten.com/1000/400" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 1"
        active
        onActivate={() => console.log('Clicked Tab 1')}
      >
        <Paragraph size="2">Lorem kittsum dolor sit ameow.</Paragraph>
        <img src="http://placekitten.com/1000/500" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 2"
        onActivate={() => console.log('Clicked Tab 2')}
      >
        <Paragraph size="2">Lorem kittsum dolor sit ameow.</Paragraph>
        <img src="http://placekitten.com/1000/450" width="100%" />
      </Tabs.Panel>
    </Tabs>
  );
}
Pill.storyName = 'pill';
