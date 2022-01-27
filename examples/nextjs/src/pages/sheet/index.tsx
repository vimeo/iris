import { useState } from 'react';
import styled, { css } from 'styled-components';

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
import { Tabs } from '@vimeo/iris/layout';
import { useIsomorphicEffect } from '@vimeo/iris/utils';
import { core } from '@vimeo/iris/tokens';

const TokenDots = css`
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 0;
  padding: 2rem;
  border-bottom: 1px solid var(--color-stroke);
`;

export function Sheet({ themeToggle, ...props }) {
  return (
    <>
      <Header style={{ margin: '1rem 2rem 0' }}>Tier 1 Tokens</Header>

      <div css={TokenDots}>
        <TokenColorCSS token="surface-primary" />
        <TokenColorCSS token="surface-secondary" />
        <TokenColorCSS token="surface-tertiary" />
        <TokenColorCSS token="background-primary" />
        <TokenColorCSS token="background-secondary" />
        <TokenColorCSS token="text-primary" />
        <TokenColorCSS token="text-secondary" />
        <TokenColorCSS token="stroke" />
        <TokenColorCSS token="format-primary" />
        <TokenColorCSS token="format-secondary" />
        <TokenColorCSS token="format-tertiary" />
        <TokenColorCSS token="status-positive" />
        <TokenColorCSS token="status-negative" />
        <TokenColorCSS token="status-caution" />
      </div>

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
            <Paragraph size="2">
              Lorem ipsum dolor sit amet.
            </Paragraph>
            <img src="http://placekitten.com/1000/400" width="100%" />
          </Tabs.Panel>
          <Tabs.Panel
            label="Tab 1"
            active
            onOpen={() => console.log('Clicked Tab 1')}
          >
            <Header size="2">I am Tab 1</Header>
            <Paragraph size="2">
              Lorem ipsum dolor sit amet.
            </Paragraph>
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

      <Header style={{ margin: '1rem 2rem 0' }}>Tier 2 Tokens</Header>

      <div css={TokenDots}>
        {[...new Array(11)].map((_, i) => (
          <TokenColorCSS key={i} token={`surface-${i * 100}`} />
        ))}
      </div>

      <div css={TokenDots}>
        {[...new Array(11)].map((_, i) => (
          <TokenColorCSS key={i} token={`background-${i * 100}`} />
        ))}
      </div>

      <div css={TokenDots}>
        {[...new Array(11)].map((_, i) => (
          <TokenColorCSS key={i} token={`text-${i * 100}`} />
        ))}
      </div>
    </>
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

const TokenColorCSS = styled.div<{ token: any }>`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 1px solid var(--color-stroke);
  background-color: ${(p) => 'var(--color-' + p.token + ')'};
`;
