import React from 'react';

import { Story } from '../storybook';
import { Header as H } from '../typography';

import { ColorPalette, ColorStory } from './storyComponents';
import { parseToRgb } from 'polished';

import {
  fuschia,
  cerise,
  vermilion,
  peridot,
  cerulean,
  lapis,
  amethyst,
  taupe,
  violet,
} from './colors';
import styled from 'styled-components';

export default { title: 'Color/accent' };

export function All() {
  return (
    <Story title="Colors" width="100%" flex>
      <Header size="2">fuschia</Header>
      <ColorPalette color={fuschia} />

      <Header size="2">cerise</Header>
      <ColorPalette color={cerise} />

      <Header size="2">vermilion</Header>
      <ColorPalette color={vermilion} />

      <Header size="2">peridot</Header>
      <ColorPalette color={peridot} />

      <Header size="2">cerulean</Header>
      <ColorPalette color={cerulean} />

      <Header size="2">lapis</Header>
      <ColorPalette color={lapis} />

      <Header size="2">amethyst</Header>
      <ColorPalette color={amethyst} />

      <Header size="2">taupe</Header>
      <ColorPalette color={taupe} />
    </Story>
  );
}
All.storyName = 'all';

export function Fuschia() {
  return ColorStory('fuschia', fuschia);
}
Fuschia.storyName = 'fuschia';

export function Cerise() {
  return ColorStory('cerise', cerise);
}
Cerise.storyName = 'cerise';

export function Vermilion() {
  return ColorStory('vermilion', vermilion);
}
Vermilion.storyName = 'vermilion';

export function Peridot() {
  return ColorStory('peridot', peridot);
}
Peridot.storyName = 'peridot';

export function Cerulean() {
  return ColorStory('cerulean', cerulean);
}
Cerulean.storyName = 'cerulean';

export function Lapis() {
  return ColorStory('lapis', lapis);
}
Lapis.storyName = 'lapis';
export function Amethyst() {
  return ColorStory('amethyst', amethyst);
}
Amethyst.storyName = 'amethyst';

export function Taupe() {
  return ColorStory('taupe', taupe);
}
Taupe.storyName = 'taupe';

function ColorSwatch({ color, title, ...props }) {
  const { red, green, blue } = parseToRgb(color);
  const rbgString = `rgb(${red}, ${green}, ${blue})`;
  return (
    <div
      style={{
        display: 'inline-block',
        overflow: 'hidden',
      }}
      {...props}
    >
      <ColorSwatchStyled color={color} />
      <Header size="5">{title}</Header>
      <Header size="5">{color}</Header>
      <Header size="5">{rbgString}</Header>
    </div>
  );
}

const ColorSwatchStyled = styled.div`
  width: calc(3rem + 1.25vw);
  height: calc(3rem + 1.25vw);
  background: ${({ color }) => color};
  margin-right: 0.125rem;
  border-radius: 0.25rem;
`;
export function Violet() {
  const violetCache = [
    0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
  ];
  return (
    <>
      <Header>Violet</Header>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, max-content)',
          gap: '1rem',
        }}
      >
        {violetCache.map((grade, i) => (
          <ColorSwatch key={i} color={violet(grade)} title={grade} />
        ))}
      </div>
    </>
  );
}
Violet.storyName = 'violet';

const Header = styled(H)`
  margin: 0;
`;
