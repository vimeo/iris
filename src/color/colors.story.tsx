import React, { SFC } from 'react';
import styled from 'styled-components';

import { Story } from '../storybook';
import { Header } from '../typography';

import {
  red,
  yellow,
  green,
  blue,
  slate,
  grayscale,
  white,
  black,
} from './colors';

import { number } from '@storybook/addon-knobs';
import { rgba, readableColor } from 'polished';

export default { title: 'Color|Colors/' };

export function All() {
  return (
    <Story title="Colors" width="100%" flex>
      <Header size="3">Red</Header>
      <ColorPalette color={red} />

      <Header size="3">Yellow</Header>
      <ColorPalette color={yellow} />

      <Header size="3">Green</Header>
      <ColorPalette color={green} />

      <Header size="3">Blue</Header>
      <ColorPalette color={blue} />

      <Header size="3">Slate</Header>
      <ColorPalette color={slate} />

      <Header size="3">Grayscale</Header>
      <ColorPalette color={grayscale} />
    </Story>
  );
}

export function Red() {
  return ColorStory('red', red);
}

export function Yellow() {
  return ColorStory('yellow', yellow);
}

export function Green() {
  return ColorStory('green', green);
}

export function Blue() {
  return ColorStory('blue', blue);
}

export function Slate() {
  return ColorStory('slate', slate);
}

export function Grayscale() {
  return ColorStory('grayscale', grayscale);
}

function ColorStory(colorName, colorFn) {
  const value = number(
    'color grade',
    500,
    {
      range: true,
      min: 0,
      max: 1000,
      step: 10,
    },
    'BLUE',
  );

  const hex = colorFn(value);

  const color = {
    grade: value,
    hex,
    rgb: rgba(hex, 1),
  };

  return (
    <Story title="Colors" width="100%" flex>
      <Header size="3" style={{ textTransform: 'capitalize' }}>
        {colorName}
      </Header>
      <div
        style={{
          background: color.hex,
          border: `3px solid ${readableColor(color.hex)}`,
          borderRadius: '0.2rem',
          padding: '1rem',
          margin: '1rem 0',
          width: '100%',
        }}
      >
        <h1 style={{ color: readableColor(color.hex) }}>
          {color.grade}
        </h1>
        <h1 style={{ color: readableColor(color.hex) }}>
          {color.hex}
        </h1>
        <h1 style={{ color: readableColor(color.hex) }}>
          {color.rgb}
        </h1>
      </div>

      <ColorPalette color={colorFn} />
    </Story>
  );
}

const LEGACY_COLORS = {
  VimeoBlue: '#00adef',
  VimeoBlueDarkened: '#0088cc',
  VimeoBlueLightened: '#36C5FC',
  DarkerBlue: '#093AC9',
  Foam: '#e5f7fd',
  Pistachio: '#4EC437',
  PistachioDarkened: '#398F29',
  PistachioLightened: '#7ED46C',
  RumSwizzle: '#f2f9e5',
  SunsetOrange: '#ff4d4d',
  SunsetOrangeDarkened: '#d93636',
  PalePink: '#ffeded',
  AstroGranite: '#1a2e3b',
  RegentGray: '#8498A4',
  SoutherlySky: '#b3bfc8',
  Porcelain: '#e3e8e9',
  Plaster: '#eef1f2',
  Paste: '#f6f7f8',
  White: '#fff',
  WarningYellow: '#ffb21e',
  DarkDark: '#2E2E2E',
  Black: '#000',
  RavenImperial: '#1f1f1f',
  ObsidianSlate: '#2e2e2e',
  SovereignShadow: '#404040',
  AshenWinter: '#4b4b4b',
  IronHeart: '#666',
};

const REDS = ['PalePink', 'SunsetOrange', 'SunsetOrangeDarkened'];
const YELLOWS = ['WarningYellow'];
const BLUES = [
  'Foam',
  'VimeoBlueLightened',
  'VimeoBlue',
  'VimeoBlueDarkened',
];
const GREENS = [
  'RumSwizzle',
  'PistachioLightened',
  'Pistachio',
  'PistachioDarkened',
];
const SLATES = [
  'Paste',
  'Porcelain',
  'SoutherlySky',
  'RegentGray',
  'AstroGranite',
];
const GRAYSCALE = [
  'Plaster',
  'IronHeart',
  'AshenWinter',
  'SovereignShadow',
  'ObsidianSlate',
  'RavenImperial',
];

function ColorCompare({
  prior,
  current,
  title,
  weights = [50, 500, 600],
}) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
      <Header>{title}</Header>
      <div style={{ display: 'flex', width: '100%' }}>
        {prior.map((colorName, i) => (
          <ColorBlock
            colorName={colorName}
            colorHex={LEGACY_COLORS[colorName]}
            width="calc(10rem + 3vw)"
            height="calc(10rem + 3vw)"
            key={i}
          />
        ))}
      </div>
      <div style={{ display: 'flex', width: '100%' }}>
        {weights.map((weight, i) => (
          <ColorBlock
            colorName={weight}
            colorHex={current(weight)}
            width="calc(10rem + 3vw)"
            height="calc(10rem + 3vw)"
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export function Index() {
  return (
    <Story title="Compare legacy colors" width="100%" flex>
      <ColorCompare prior={REDS} current={red} title="red" />
      <ColorCompare
        prior={YELLOWS}
        current={yellow}
        weights={[500]}
        title="yellow"
      />
      <ColorCompare
        prior={GREENS}
        current={green}
        weights={[50, 400, 500, 600]}
        title="green"
      />
      <ColorCompare
        prior={BLUES}
        current={blue}
        weights={[50, 400, 500, 600]}
        title="blue"
      />
      <ColorCompare
        prior={SLATES}
        current={slate}
        weights={[50, 100, 200, 500, 800]}
        title="slate"
      />
      <ColorCompare
        prior={GRAYSCALE}
        current={grayscale}
        weights={[50, 500, 650, 700, 800, 850]}
        title="grayscale"
      />
    </Story>
  );
}

const ColorPalette: SFC<any> = ({
  color,
  baseHue = 0,
  baseSaturate = 0.1,
  ...props
}) => (
  <div
    style={{
      width: '100%',
      padding: '1rem 1rem 0 1rem',
    }}
  >
    {[8, 6, 5, 4, 2, 0.5].map((num, i) => {
      return (
        <ColorSwatch
          color={color(num * 100)}
          title={num * 100}
          key={i}
        />
      );
    })}
    {/* <ColorSwatch color="transparent" title="" />
    {titles.map((title, i) => {
      return (
        <ColorSwatch color={color[title]} title={title} key={i} />
      );
    })} */}
  </div>
);

const titles = [
  'pressed',
  'selected',
  'base',
  'focus',
  'hover',
  'disabled',
];

const ColorSwatch = ({ color, title = color, ...props }: any) => (
  <div
    style={{
      display: 'inline-block',
      overflow: 'hidden',
    }}
    {...props}
  >
    <ColorSwatchStyled color={color} />
    <Header size="5">{title}</Header>
  </div>
);

const ColorSwatchStyled = styled.div`
  width: calc(3rem + 1.5vw);
  height: calc(3rem + 1.5vw);
  background: ${({ color }) => color};
  margin-right: 0.25rem;
`;

const ColorBlock: SFC<any> = ({
  colorName,
  colorHex,
  width = 'calc(13rem + 6vw)',
  height = 'calc(12rem + 6vw)',
}) => (
  <ColorBlockStyled colorHex={colorHex} width={width} height={height}>
    <ColorHex>{colorHex}</ColorHex>
    <ColorTitle>{colorName}</ColorTitle>
  </ColorBlockStyled>
);

const ColorTitle = styled.span`
  width: 100%;
  height: calc(2rem + 2vw);
  text-align: center;
  line-height: calc(2rem + 2vw);
  background: rgba(0, 0, 0, 0.2);
  display: block;
  font-weight: 600;
  border-radius: 0 0 3px 3px;
  letter-spacing: 0.2px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  color: ${white};
  transition: 120ms ease-in-out;
`;

const ColorHex = styled.span`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: inline-block;
  padding: 0.5rem 1rem;
  font-family: monospace;
  font-weight: 600;
  color: ${white};
  transition: 120ms ease-in-out;
  margin-bottom: calc(1rem + 1vw);
`;

const ColorBlockStyled = styled.div<any>`
  background: ${p => p.colorHex};
  width: ${p => p.width};
  height: ${p => p.height};
  margin: 1rem;
  float: left;
  border-radius: 3px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: 'Helvetica', sans-serif;
  transition: 120ms ease-in-out;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* font-smoothing: antialiased; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizelegibility;
  &:hover {
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.25);
    transform: scale(1.025);
    ${ColorTitle}, ${ColorHex} {
      background: rgba(0, 0, 0, 0.5);
    }
  }
`;
