import { useState } from 'react';
import styled from 'styled-components';

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
import { Gear, LightDark } from '@vimeo/iris/icons';
import { Modal, Tabs } from '@vimeo/iris/layout';
import { useIsomorphicEffect } from '@vimeo/iris/utils';
import { core } from '@vimeo/iris/tokens';
import { themes } from '@vimeo/iris/themes';

export function Sheet({ themeToggle, ...props }) {
  return (
    <SheetGrid>
      <div
        css={`
          width: 100%;
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          margin: 0 0 2rem 0;
          padding: 0 0 2rem 0;
          border-bottom: 1px solid ${core.color.stroke};
        `}
      >
        <TokenColor token={core.color.surface.primary} />
        <TokenColor token={core.color.surface.secondary} />
        <TokenColor token={core.color.surface.tertiary} />
        <TokenColor token={core.color.background.primary} />
        <TokenColor token={core.color.background.secondary} />
        <TokenColor token={core.color.text.primary} />
        <TokenColor token={core.color.text.secondary} />
        <TokenColor token={core.color.stroke} />
        <TokenColor token={core.color.format.primary} />
        <TokenColor token={core.color.format.secondary} />
        <TokenColor token={core.color.format.tertiary} />
        <TokenColor token={core.color.status.positive} />
        <TokenColor token={core.color.status.negative} />
        <TokenColor token={core.color.status.caution} />
      </div>
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
      <Button
        icon={<LightDark />}
        onClick={themeToggle}
        size="xl"
        css={`
          position: fixed;
          bottom: 3rem;
          right: 3rem;
        `}
      />
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

const TokenColor = styled.div<{ token: any }>`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 1px solid ${core.color.stroke};
  background-color: ${(p) => p.token};
`;
