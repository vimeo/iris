import React, { useState } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Toolbar } from '../Toolbar';

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
import { Header } from '../../../typography';
import { Button, NewItemCard } from '../../../components';
import { Layout } from '../../../storybook';

export default {
  title: 'layout/Toolbar/examples',
  component: Toolbar,
};

const VideoCard = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  margin: 1rem 0;
  border-radius: 0.5rem;
  background: ${(p) => rgba(p.theme.content.color, 0.334)};
`;

const Masonry = styled(IconMasonry)`
  * {
    fill: none;
  }
`;

const panelContent = (header: string, num) => (
  <div
    style={{
      padding: '0.334rem 1rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      height: '100%',
    }}
  >
    <Header size="3" style={{ marginTop: 0 }}>
      {header}
    </Header>
    {[...new Array(num)].map(() => (
      <VideoCard />
    ))}
    <NewItemCard style={{ minHeight: '7.5rem', margin: '1rem 0' }}>
      Add {header}
    </NewItemCard>
    {header === 'Sources' && (
      <Button style={{ marginTop: 'auto' }}>Go Backstage</Button>
    )}
  </div>
);

export function Live() {
  const state = useState('Sources');

  return (
    <Layout.FullBleed>
      <Toolbar state={state}>
        <Toolbar.Item
          label="Sources"
          icon={<Camera />}
          children={panelContent('Sources', 3)}
        />
        <Toolbar.Item
          label="Videos"
          icon={<VideoStack />}
          children={panelContent('Videos', 2)}
        />
        <Toolbar.Item
          label="Images"
          icon={<Image />}
          children={panelContent('Images', 0)}
        />
        <Toolbar.Break />
        <Toolbar.Item
          label="Lower-thirds"
          icon={<Masonry />}
          children={panelContent('Lower-thirds', 0)}
        />
        <Toolbar.Item
          label="Logos"
          icon={<ColorPalette />}
          children={panelContent('Logos', 0)}
        />
        <Toolbar.Item
          label="Auto closed captions"
          icon={<Video />}
          children={panelContent('Auto closed captions', 0)}
        />
        <Toolbar.Break />
        <Toolbar.Item
          label="Polls"
          icon={<BarChartOutlined />}
          children={panelContent('Polls', 0)}
        />
        <Toolbar.Item
          label="Q&A"
          icon={<SpeechBubbleSquared />}
          children={panelContent('Q&A', 0)}
        />
      </Toolbar>
    </Layout.FullBleed>
  );
}
