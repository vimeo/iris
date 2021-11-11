import { useState } from 'react';

import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  CounterIcon,
  Input,
  NewItemCard,
  Notice,
  Radio,
  Tag,
  Toggle,
  TourPoint,
} from '@vimeo/iris/components';
import { Header, Paragraph } from '@vimeo/iris/typography';
import { Gear } from '@vimeo/iris/icons';
import { Modal, Tabs } from '@vimeo/iris/layout';
import styled from 'styled-components';
import { useIsomorphicEffect } from '@vimeo/iris/utils';

export function Sheet({ themeSet, ...props }) {
  return (
    <SheetGrid>
      <Button>Button</Button>
      <NewItemCard style={{ width: '15rem' }}>
        NewItemCard
      </NewItemCard>
      <Avatar size="md" src="https://i.vimeocdn.com/video/100" />
      <Badge>Badge</Badge>
      <CounterIcon icon={<Gear />}>CounterIcon</CounterIcon>
      <Tag>Tag</Tag>
      <Notice format="positive">Notice</Notice>
      <div style={{ margin: '0 100vw' }} />
      <NoSSR>
        <TourPoint
          active={true}
          attach="left"
          // src="https://i.vimeocdn.com/video/100"
          step={1}
          title="A Fresh New Look"
          content="All the leaves are brown and the sky is grey, I've been for a walk on a winters day."
        >
          <Button style={{ margin: '10rem auto' }}>Button</Button>
        </TourPoint>
      </NoSSR>
      <div style={{ margin: '0 100vw' }} />
      {/* <Modal active content={<div>Modal</div>} /> */}
      <Tabs style={{ maxWidth: '30rem' }}>
        <Tabs.Panel
          label="Tab 0"
          onOpen={() => console.log('Clicked Tab 0')}
        >
          <Header size="2">I am Tab 0</Header>
          <Paragraph size="2">Lorem ipsum dolor sit amet.</Paragraph>
          <img src="http://placekitten.com/1000/400" width="100%" />
        </Tabs.Panel>
        <Tabs.Panel
          label="Tab 1"
          active
          onOpen={() => console.log('Clicked Tab 1')}
        >
          <Header size="2">I am Tab 1</Header>
          <Paragraph size="2">Lorem ipsum dolor sit amet.</Paragraph>
          <img src="http://placekitten.com/1000/500" width="100%" />
        </Tabs.Panel>
      </Tabs>
      <Input placeholder="Input" />
      <Checkbox />
      <Toggle />
      <Radio />
    </SheetGrid>
  );
}

const SheetGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
`;

function NoSSR({ children, fallback = null }) {
  const [mountedState, setMountedState] = useState(false);

  useIsomorphicEffect(() => setMountedState(true));

  return <>{mountedState ? children : fallback}</>;
}
