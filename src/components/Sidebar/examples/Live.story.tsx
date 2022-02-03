import React, { useState } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Sidebar } from '../Sidebar';

import {
  BarChartOutlined,
  Video,
  SpeechBubbleSquared,
  VideoStack,
  Camera,
  Image,
  Masonry as IconMasonry,
  ColorPalette,
} from '../../../icons';
import { Header as H } from '../../../typography';
import { Button, NewItemCard, TourPoint } from '../../../components';
import { Layout } from '../../../storybook';
import { core, tx } from '../../../tokens';

export default {
  title: 'components/Sidebar/examples',
  component: Sidebar,
};

export function Live() {
  const state = useState('Sources');

  return (
    <Layout.FullBleed>
      <Sidebar state={state}>
        <Sidebar.Item
          label="Sources"
          icon={<Camera />}
          children={panelContent('Sources', 3)}
        />
        <Sidebar.Item
          label="Videos"
          icon={<VideoStack />}
          children={panelContent('Videos', 2)}
        />
        <Sidebar.Item
          label="Images"
          icon={<Image />}
          children={panelContent('Images', 0)}
        />
        <Sidebar.Break />
        <Sidebar.Item
          label="Lower-thirds"
          icon={<Masonry />}
          children={panelContent('Lower-thirds', 0)}
        />
        <Sidebar.Item
          label="Logos"
          icon={<ColorPalette />}
          children={panelContent('Logos', 0)}
        />
        <Sidebar.Item
          label="Auto closed captions"
          icon={<Video />}
          children={panelContent('Auto closed captions', 0)}
        />
        <Sidebar.Break />
        <Sidebar.Item
          label="Polls"
          icon={<BarChartOutlined />}
          children={panelContent('Polls', 0)}
        />
        <Sidebar.Item
          label="Q&A"
          icon={<SpeechBubbleSquared />}
          children={panelContent('Q&A', 0)}
        />
      </Sidebar>
    </Layout.FullBleed>
  );
}

export function withTourPoint() {
  const state = useState('Sources');
  const [active, activeSet] = useState(true);

  return (
    <Layout.FullBleed>
      <Button onClick={() => activeSet((active) => !active)}>
        Toggle TourPoint
      </Button>
      <Sidebar
        state={state}
        attach="right"
        style={{ position: 'absolute', top: 0, right: 0 }}
      >
        <Sidebar.Item
          label="Sources"
          icon={<Camera />}
          children={panelContent('Sources', 3)}
        />
        <Sidebar.Item
          label="Videos"
          icon={<VideoStack />}
          tourPoint={
            <TourPoint
              active={active}
              attach="right-top"
              src="http://placekitten.com/320/213"
              step={1}
              title="A Fresh New Look"
              content="All the leaves are brown and the sky is grey, I've been for a walk on a winters day."
            />
          }
          children={panelContent('Videos', 2)}
        />

        <Sidebar.Item
          label="Images"
          icon={<Image />}
          children={panelContent('Images', 0)}
        />
      </Sidebar>
    </Layout.FullBleed>
  );
}

const VideoCard = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  margin: 1rem 0;
  border-radius: 0.5rem;
  background: ${(p) =>
    rgba(tx(p.theme, core.color.text(1000)), 0.334)};
`;

const Masonry = styled(IconMasonry)`
  * {
    fill: none;
  }
`;

const Wrapper = styled.div`
  padding: 0.334rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

const Header = styled(H)`
  margin-top: 0;
`;

const panelContent = (header: string, num) => (
  <Wrapper>
    <Header size="3">{header}</Header>
    {[...new Array(num)].map((_, key) => (
      <VideoCard key={key} />
    ))}
    <NewItemCard style={{ minHeight: '7.5rem', margin: '1rem 0' }}>
      Add {header}
    </NewItemCard>
    {header === 'Sources' && (
      <Button style={{ marginTop: 'auto' }}>Go Backstage</Button>
    )}
  </Wrapper>
);
