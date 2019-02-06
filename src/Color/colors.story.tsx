import React, { SFC } from 'react';
import { storiesOf } from '@storybook/react';
import * as COLORS from '../Color/Color';
import styled from 'styled-components';
import { Story } from '../../.storybook/Story';

storiesOf('colors/', module)
  .add('reds', () => (
    <Story title="Colors" subTitle="reds" width="100%" flex>
      {REDS.map((colorName, i) => (
        <ColorBlock
          colorName={colorName}
          colorHex={COLORS[colorName]}
          key={i}
        />
      ))}
    </Story>
  ))
  .add('yellows', () => (
    <Story title="Colors" subTitle="yellows" width="100%" flex>
      {YELLOWS.map((colorName, i) => (
        <ColorBlock
          colorName={colorName}
          colorHex={COLORS[colorName]}
          key={i}
        />
      ))}
    </Story>
  ))
  .add('blues', () => (
    <Story title="Colors" subTitle="blues" width="100%" flex>
      {BLUES.map((colorName, i) => (
        <ColorBlock
          colorName={colorName}
          colorHex={COLORS[colorName]}
          key={i}
        />
      ))}
    </Story>
  ))
  .add('greens', () => (
    <Story title="Colors" subTitle="greens" width="100%" flex>
      {GREENS.map((colorName, i) => (
        <ColorBlock
          colorName={colorName}
          colorHex={COLORS[colorName]}
          key={i}
        />
      ))}
    </Story>
  ))
  .add('slates', () => (
    <Story title="Colors" subTitle="slates" width="100%" flex>
      {SLATES.map((colorName, i) => (
        <ColorBlock
          colorName={colorName}
          colorHex={COLORS[colorName]}
          key={i}
        />
      ))}
    </Story>
  ))
  .add('grayscale', () => (
    <Story title="Colors" subTitle="grayscale" width="100%" flex>
      {GRAYSCALE.map((colorName, i) => (
        <ColorBlock
          colorName={colorName}
          colorHex={COLORS[colorName]}
          key={i}
        />
      ))}
    </Story>
  ))
  .add('all colors', () => (
    <Story title="Colors" subTitle="all" width="100%" flex>
      {Object.keys(COLORS).map((colorName, i) => (
        <ColorBlock
          colorName={colorName}
          colorHex={COLORS[colorName]}
          key={i}
        />
      ))}
    </Story>
  ));

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
  color: ${COLORS.White};
  transition: 120ms ease-in-out;
`;

const ColorHex = styled.span`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: inline-block;
  padding: 0.5rem 1rem;
  font-family: monospace;
  font-weight: 600;
  color: ${COLORS.White};
  transition: 120ms ease-in-out;
  margin-bottom: calc(1rem + 1vw);
`;

const ColorBlockStyled = styled.div<any>`
  background: ${props => props.colorHex};
  width: calc(13rem + 6vw);
  height: calc(12rem + 6vw);
  margin: 1rem;
  float: left;
  border-radius: 3px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: Helvetica;
  transition: 120ms ease-in-out;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-smoothing: antialiased;
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

const REDS = ['PalePink', 'SunsetOrange', 'SunsetOrangeDarkened'];
const YELLOWS = ['WarningYellow'];
const BLUES = [
  'Foam',
  'VimeoBlueLightened',
  'VimeoBlue',
  'VimeoBlueDarkened',
  'DarkerBlue',
];
const GREENS = [
  'RumSwizzle',
  'Pistachio',
  'PistachioLightened',
  'PistachioDarkened',
];
const SLATES = [
  'Paste',
  'SoutherlySky',
  'RegentGray',
  'AstroGranite',
];
const GRAYSCALE = [
  'White',
  'Plaster',
  'Porcelain',
  'IronHeart',
  'AshenWinter',
  'SovereignShadow',
  'ObsidianSlate',
  'RavenImperial',
  'Black',
];
