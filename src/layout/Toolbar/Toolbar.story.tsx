import React, { useState } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Toolbar as Toolbar_A } from './Toolbar';
import { Toolbar_B } from './Toolbar_B';
import { Toolbar_C } from './Toolbar_C';
import { Toolbar_D } from './Toolbar_D';

import {
  BarChartOutlined,
  Gear,
  Video,
  SpeechBubbleSquared,
  VideoStack,
  Camera,
  Image,
  Masonry,
  ColorPalette,
  DismissX,
} from '../../icons';
import { Header, Paragraph } from '../../typography';
import { Button, NewItemCard } from '../../components';

export default {
  title: 'layout/Toolbar',
  component: Toolbar_A,
};

const VideoCard = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  margin: 1rem 0;
  border-radius: 0.5rem;
  background: ${(p) => rgba(p.theme.content.color, 0.334)};
`;

const panelContent = (header, num, activeSet) => (
  <div
    style={{
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      height: '100%',
    }}
  >
    <Button
      icon={<DismissX />}
      variant="minimalTransparent"
      format="basic"
      onClick={() => activeSet(false)}
      style={{
        position: 'absolute',
        top: '0',
        right: '0',
      }}
    />
    <Header size="3">{header}</Header>
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

export function PrototypeA() {
  const [active, activeSet] = useState('Sources');

  const onClick = (label) => () =>
    activeSet((active) => (active === label ? false : label));

  return (
    <>
      <Header>A: Indepedent Expansion State</Header>
      <br />
      <div
        style={{
          display: 'flex',
          padding: 0,
          margin: '-1rem',
          minHeight: 'calc(100vh - 15rem)',
        }}
      >
        <Toolbar_A active={active}>
          <Toolbar_A.Item
            label="Sources"
            onClick={onClick('Sources')}
            icon={<Camera />}
            children={panelContent('Sources', 3, activeSet)}
          />
          <Toolbar_A.Item
            label="Videos"
            onClick={onClick('Videos')}
            icon={<VideoStack />}
            children={panelContent('Videos', 2, activeSet)}
          />
          <Toolbar_A.Item
            label="Images"
            onClick={onClick('Images')}
            icon={<Image />}
            children={panelContent('Images', 0, activeSet)}
          />
          <Toolbar_A.Break />
          <Toolbar_A.Item
            label="Lower-thirds"
            onClick={onClick('Lower-thirds')}
            icon={<Masonry />}
            children={panelContent('Lower-thirds', 0, activeSet)}
          />
          <Toolbar_A.Item
            label="Logos"
            onClick={onClick('Logos')}
            icon={<ColorPalette />}
            children={panelContent('Logos', 0, activeSet)}
          />
          <Toolbar_A.Item
            label="Auto closed captions"
            onClick={onClick('Auto closed captions')}
            icon={<Video />}
            children={panelContent(
              'Auto closed captions',
              0,
              activeSet
            )}
          />
          <Toolbar_A.Break />
          <Toolbar_A.Item
            label="Polls"
            onClick={onClick('Polls')}
            icon={<BarChartOutlined />}
            children={panelContent('Polls', 0, activeSet)}
          />
          <Toolbar_A.Item
            label="Q&A"
            onClick={onClick('Q&A')}
            icon={<SpeechBubbleSquared />}
            children={panelContent('Q&A', 0, activeSet)}
          />
        </Toolbar_A>
      </div>
    </>
  );
}

export function PrototypeB() {
  const [active, activeSet] = useState('Sources');

  const onClick = (label) => () => activeSet(label);

  return (
    <>
      <Header>B: Shared Expansion State</Header>
      <br />
      <div
        style={{
          display: 'flex',
          padding: 0,
          margin: '-1rem',
          minHeight: '67vh',
        }}
      >
        <Toolbar_B active={active}>
          <Toolbar_B.Item
            label="Sources"
            onClick={onClick('Sources')}
            icon={<Camera />}
            children={panelContent('Sources', 3, activeSet)}
          />
          <Toolbar_B.Item
            label="Videos"
            onClick={onClick('Videos')}
            icon={<VideoStack />}
            children={panelContent('Videos', 2, activeSet)}
          />
          <Toolbar_B.Item
            label="Images"
            onClick={onClick('Images')}
            icon={<Image />}
            children={panelContent('Images', 0, activeSet)}
          />
          <Toolbar_B.Break />
          <Toolbar_B.Item
            label="Lower-thirds"
            onClick={onClick('Lower-thirds')}
            icon={<Masonry />}
            children={panelContent('Lower-thirds', 0, activeSet)}
          />
          <Toolbar_B.Item
            label="Logos"
            onClick={onClick('Logos')}
            icon={<ColorPalette />}
            children={panelContent('Logos', 0, activeSet)}
          />
          <Toolbar_B.Item
            label="Auto closed captions"
            onClick={onClick('Auto closed captions')}
            icon={<Video />}
            children={panelContent(
              'Auto closed captions',
              0,
              activeSet
            )}
          />
          <Toolbar_B.Break />
          <Toolbar_B.Item
            label="Polls"
            onClick={onClick('Polls')}
            icon={<BarChartOutlined />}
            children={panelContent('Polls', 0, activeSet)}
          />
          <Toolbar_B.Item
            label="Q&A"
            onClick={onClick('Q&A')}
            icon={<SpeechBubbleSquared />}
            children={panelContent('Q&A', 0, activeSet)}
          />
        </Toolbar_B>
      </div>
    </>
  );
}

export function PrototypeC() {
  const [active, activeSet] = useState('Sources');

  const onClick = (label) => () =>
    activeSet((active) => (active === label ? false : label));

  return (
    <>
      <Header>C: Panel Shuffle</Header>
      <br />
      <div
        style={{
          display: 'flex',
          padding: 0,
          margin: '-1rem',
          minHeight: '67vh',
        }}
      >
        <Toolbar_C active={active}>
          <Toolbar_C.Item
            label="Sources"
            onClick={onClick('Sources')}
            icon={<Camera />}
            children={panelContent('Sources', 3, activeSet)}
          />
          <Toolbar_C.Item
            label="Videos"
            onClick={onClick('Videos')}
            icon={<VideoStack />}
            children={panelContent('Videos', 2, activeSet)}
          />
          <Toolbar_C.Item
            label="Images"
            onClick={onClick('Images')}
            icon={<Image />}
            children={panelContent('Images', 0, activeSet)}
          />
          <Toolbar_C.Break />
          <Toolbar_C.Item
            label="Lower-thirds"
            onClick={onClick('Lower-thirds')}
            icon={<Masonry />}
            children={panelContent('Lower-thirds', 0, activeSet)}
          />
          <Toolbar_C.Item
            label="Logos"
            onClick={onClick('Logos')}
            icon={<ColorPalette />}
            children={panelContent('Logos', 0, activeSet)}
          />
          <Toolbar_C.Item
            label="Auto closed captions"
            onClick={onClick('Auto closed captions')}
            icon={<Video />}
            children={panelContent(
              'Auto closed captions',
              0,
              activeSet
            )}
          />
          <Toolbar_C.Break />
          <Toolbar_C.Item
            label="Polls"
            onClick={onClick('Polls')}
            icon={<BarChartOutlined />}
            children={panelContent('Polls', 0, activeSet)}
          />
          <Toolbar_C.Item
            label="Q&A"
            onClick={onClick('Q&A')}
            icon={<SpeechBubbleSquared />}
            children={panelContent('Q&A', 0, activeSet)}
          />
        </Toolbar_C>
      </div>
    </>
  );
}

export function PrototypeD() {
  const [active, activeSet] = useState('Sources');

  const onClick = (label) => () =>
    activeSet((active) => (active === label ? false : label));

  return (
    <>
      <Header>D: No Expansion</Header>
      <br />
      <div
        style={{
          display: 'flex',
          padding: 0,
          margin: '-1rem',
          minHeight: '67vh',
        }}
      >
        <Toolbar_D active={active}>
          <Toolbar_D.Item
            label="Sources"
            onClick={onClick('Sources')}
            icon={<Camera />}
            children={panelContent('Sources', 3, activeSet)}
          />
          <Toolbar_D.Item
            label="Videos"
            onClick={onClick('Videos')}
            icon={<VideoStack />}
            children={panelContent('Videos', 2, activeSet)}
          />
          <Toolbar_D.Item
            label="Images"
            onClick={onClick('Images')}
            icon={<Image />}
            children={panelContent('Images', 0, activeSet)}
          />
          <Toolbar_D.Break />
          <Toolbar_D.Item
            label="Lower-thirds"
            onClick={onClick('Lower-thirds')}
            icon={<Masonry />}
            children={panelContent('Lower-thirds', 0, activeSet)}
          />
          <Toolbar_D.Item
            label="Logos"
            onClick={onClick('Logos')}
            icon={<ColorPalette />}
            children={panelContent('Logos', 0, activeSet)}
          />
          <Toolbar_D.Item
            label="Auto closed captions"
            onClick={onClick('Auto closed captions')}
            icon={<Video />}
            children={panelContent(
              'Auto closed captions',
              0,
              activeSet
            )}
          />
          <Toolbar_D.Break />
          <Toolbar_D.Item
            label="Polls"
            onClick={onClick('Polls')}
            icon={<BarChartOutlined />}
            children={panelContent('Polls', 0, activeSet)}
          />
          <Toolbar_D.Item
            label="Q&A"
            onClick={onClick('Q&A')}
            icon={<SpeechBubbleSquared />}
            children={panelContent('Q&A', 0, activeSet)}
          />
        </Toolbar_D>
      </div>
    </>
  );
}
