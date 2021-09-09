import React, { useState } from 'react';
import styled from 'styled-components';

import { Tabs as T } from './Tabs';

import { Paragraph } from '../../typography';
import { Button } from '../Button/Button';

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
        onActivate={() => console.log('Clicked Tab 0')}>
        <Paragraph size="2">Lorem kittsum dolor sit ameow.</Paragraph>
        <img src="http://placekitten.com/1000/400" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 1"
        active
        onActivate={() => console.log('Clicked Tab 1')}>
        <Paragraph size="2">Lorem kittsum dolor sit ameow.</Paragraph>
        <img src="http://placekitten.com/1000/500" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 2"
        onActivate={() => console.log('Clicked Tab 2')}>
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
        onActivate={() => console.log('Clicked Tab 0')}>
        <Paragraph size="2">Lorem kittsum dolor sit ameow.</Paragraph>
        <img src="http://placekitten.com/1000/400" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 1"
        active
        onActivate={() => console.log('Clicked Tab 1')}>
        <Paragraph size="2">Lorem kittsum dolor sit ameow.</Paragraph>
        <img src="http://placekitten.com/1000/500" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 2"
        onActivate={() => console.log('Clicked Tab 2')}>
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
        onActivate={() => console.log('Clicked Tab 0')}>
        <Paragraph size="2">Lorem kittsum dolor sit ameow.</Paragraph>
        <img src="http://placekitten.com/1000/400" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 1"
        active
        onActivate={() => console.log('Clicked Tab 1')}>
        <Paragraph size="2">Lorem kittsum dolor sit ameow.</Paragraph>
        <img src="http://placekitten.com/1000/500" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 2"
        onActivate={() => console.log('Clicked Tab 2')}>
        <Paragraph size="2">Lorem kittsum dolor sit ameow.</Paragraph>
        <img src="http://placekitten.com/1000/450" width="100%" />
      </Tabs.Panel>
    </Tabs>
  );
}
Pill.storyName = 'pill';

export function OnOpen() {
  const [active, activeSet] = useState(1);

  function onOpen(i) {
    return () => {
      console.log('Clicked Tab ' + i);
      activeSet(i);
    };
  }

  return (
    <Tabs>
      <Tabs.Panel
        label="Tab 0"
        active={active === 0}
        onOpen={onOpen(0)}>
        <Paragraph size="2">Lorem kittsum dolor sit ameow.</Paragraph>
        <img src="http://placekitten.com/1000/400" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 1"
        active={active === 1}
        onOpen={onOpen(1)}>
        <Paragraph size="2">Lorem kittsum dolor sit ameow.</Paragraph>
        <img src="http://placekitten.com/1000/500" width="100%" />
      </Tabs.Panel>
      <Tabs.Panel
        label="Tab 2"
        active={active === 2}
        onOpen={onOpen(2)}>
        <Paragraph size="2">Lorem kittsum dolor sit ameow.</Paragraph>
        <img src="http://placekitten.com/1000/450" width="100%" />
      </Tabs.Panel>
    </Tabs>
  );
}
OnOpen.storyName = 'onOpen';
