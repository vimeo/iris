import React, { SFC } from 'react';
import { storiesOf } from '@storybook/react';
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

storiesOf('Color|Colors', module)
  .add('all', () => (
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
  ))
  .add('red', ColorStory('red', red))
  .add('yellow', ColorStory('yellow', yellow))
  .add('green', ColorStory('blue', green))
  .add('blue', ColorStory('blue', blue))
  .add('slate', ColorStory('slate', slate))
  .add('grayscale', ColorStory('grayscale', grayscale));

function ColorStory(colorName, colorFn) {
  return () => {
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
  };
}

export const ColorPalette: SFC<any> = ({
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

export const ColorSwatch = ({
  color,
  title = color,
  ...props
}: any) => (
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

const ColorBlock: SFC<any> = ({ colorName, colorHex }) => (
  <ColorBlockStyled colorHex={colorHex}>
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
  width: calc(13rem + 6vw);
  height: calc(12rem + 6vw);
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
