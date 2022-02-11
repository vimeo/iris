import React, { useState } from 'react';
import styled from 'styled-components';
import { parseToRgb, rgb } from 'polished';
import chroma from 'chroma-js';

import { contrast } from './color-contrast';

import { Button, ColorSelect } from '../components';
import { blue, green, red } from '../color';

export default { title: 'Figma/plugins/contrast' };

export function Contrast() {
  const [colors, colorsSet] = useState({
    text: '#FFFFFF',
    background: blue(500),
  });

  const textRGB = parseToRgb(colors.text);
  const backgroundRGB = parseToRgb(colors.background);

  const data: any = contrast(textRGB, backgroundRGB);
  data.a11y = findA11yColors(textRGB, backgroundRGB, data, 8);

  const color = rgb(textRGB);
  const background = rgb(backgroundRGB);

  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        margin: '1rem auto',
        width: '46rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          margin: '2rem',
          justifyContent: 'center',
        }}
      >
        <ColorSelect
          value={colors.text}
          height={240}
          onChange={(text) =>
            colorsSet((colors) => ({ ...colors, text }))
          }
        />
        <ColorSelect
          value={colors.background}
          height={240}
          onChange={(background) =>
            colorsSet((colors) => ({ ...colors, background }))
          }
        />
      </div>
      <ContrastStyled
        style={{
          '--background': background,
          '--text': color,
        }}
      >
        <Header>
          <Preview />
          <Values data={data} />
        </Header>
        <Scores data={data} />
      </ContrastStyled>
    </div>
  );
}

const ContrastStyled = styled.div`
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  box-shadow: 0 0 0.75rem -0.25rem rgba(0, 0, 0, 0.1),
    0 1rem 1rem -1rem rgba(0, 0, 0, 0.25);
  display: block;
  width: 24rem;
`;

function Values({ data: { WCAG, APCA } }) {
  return (
    <ValuesStyled>
      <div>
        <Label>Ratio (WCAG 2)</Label>
        <Value>{WCAG}</Value>
      </div>
      <div>
        <Label>Lc (APCA)</Label>
        <Value>{Math.abs(parseFloat(APCA)).toFixed(1)}</Value>
      </div>
    </ValuesStyled>
  );
}

const Label = styled.span`
  font-weight: 800;
  letter-spacing: 0.01rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  padding-bottom: 0.125rem;
  display: block;
`;

const Value = styled.span`
  letter-spacing: -0.0125rem;
  font-size: 1.75rem;
  display: block;
  font-family: 'Tahoma';
  font-weight: 100;
`;

const ValuesStyled = styled.div`
  /* padding: 1rem; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Scores({ data: { WCAG, APCA, a11y } }) {
  WCAG = parseFloat(WCAG.split(':')[0]);
  APCA = Math.abs(parseFloat(APCA));

  console.log({ a11y });

  return (
    <ScoresStyled>
      <Score requirement={WCAG >= 3}>WCAG 2.2 A</Score>
      <Score requirement={WCAG >= 4.5}>WCAG 2.2 AA</Score>
      <Score requirement={WCAG >= 7}>WCAG 2.2 AAA</Score>
      <Score requirement={APCA >= 60}>APCA 60</Score>
      <Score requirement={APCA >= 75}>APCA 75</Score>
      <Score requirement={APCA >= 90}>APCA 90</Score>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {a11y?.map(({ color, WCAG }) => {
          const background = `rgb(${color.red},${color.green},${color.blue})`;
          const style = {
            background,
            width: '3rem',
            height: '3rem',
            borderRadius: '0.25rem',
            margin: '0.5rem',
            display: 'inline-block',
            padding: '0.25rem',
            color: '#FFF',
          };
          return <div style={style}>{WCAG}</div>;
        })}
      </div>
    </ScoresStyled>
  );
}

function Score({ requirement, children }) {
  const pass = '✅';
  const fail = '❌';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.25rem 0',
        height: '3rem',
        transition: '120ms ease-in-out',
        fontSize: '0.75rem',
      }}
    >
      <span style={{ display: 'block', flexGrow: 1 }}>
        {requirement ? pass : fail} &nbsp;&nbsp; {children}
      </span>
      {!requirement && <Suggestions />}
    </div>
  );
}

function Suggestions() {
  const style = {
    background: 'rgba(150,150,150,0.67',
    width: '2rem',
    height: '2rem',
    borderRadius: '0.25rem',
  };

  return (
    <>
      <div style={style} />
      <div style={style} />
      <div style={style} />
      <div style={style} />
      <div style={style} />
    </>
  );
}

const ScoresStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 0 0 2rem 0;
  display: flex;
`;

function Preview() {
  return (
    <PreviewStyled>
      <PreviewBackground>
        <PreviewForeground />
      </PreviewBackground>
    </PreviewStyled>
  );
}

const PreviewStyled = styled.div`
  /* padding: 1rem; */
  padding: 0 2rem 0 0;
`;

const PreviewBackground = styled.div`
  background: var(--background);
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`;

const PreviewForeground = styled.div`
  border: 3px solid var(--text);
  width: 3rem;
  height: 3rem;
  border-radius: 0.334rem;
`;

const white = { red: 255, green: 255, blue: 255 };

const transformations = [
  { l: -1, c: 1, h: 0 },
  { l: -1, c: 2, h: 0 },
  { l: 0, c: 1, h: 1 },
  { l: 0, c: 1, h: 2 },
  { l: 0, c: 1, h: -1 },
  { l: 0, c: 1, h: -2 },
  { l: -2, c: 3, h: 0 },
  { l: -2, c: 3, h: 1 },
  { l: -2, c: 3, h: -1 },
  { l: -1, c: 2, h: 1 },
  { l: -1, c: 2, h: -1 },
];

function colorShift(
  { l: l_a, c: c_a, h: h_a },
  { l: l_b, c: c_b, h: h_b },
  multiplier
) {
  if (isNaN(h_a)) h_a = 0;

  const { l, c, h } = {
    l: l_a + l_b * (multiplier + 1),
    c: c_a + c_b * (multiplier + 1),
    h: h_a + h_b * (multiplier + 1),
  };

  const color = chroma({ l, c, h }, 'lch').rgb();
  return color;
}

function findA11yColors(
  colorText,
  colorBackground,
  { WCAG: delta },
  matchesRequested = 5
) {
  const matches = [];
  delta = 5 - parseFloat(delta.split(':')[0]);

  const { red, green, blue } = colorBackground;
  let [l, c, h] = chroma({ r: red, g: green, b: blue }).lch();

  let i = 0;
  let j = 0;
  function transformationContrastCheck(transformation, multiplier) {
    i++;
    if (matches.length >= matchesRequested) return;

    const [red, green, blue] = colorShift(
      { l, c, h },
      transformation,
      multiplier + delta * 2 * j
    );

    const colorCandidateRGB = { red, green, blue };

    let { APCA, WCAG } = contrast(colorText, colorCandidateRGB);
    (APCA as unknown as number) = Math.abs(APCA as unknown as number);
    (WCAG as unknown as number) = parseFloat(WCAG.split(':')[0]);

    if (APCA > 75 && (WCAG as unknown as number) > 4.5) {
      matches.push({ color: colorCandidateRGB, WCAG });
    }
  }

  do {
    transformations.map(transformationContrastCheck);
    j++;
  } while (i < 5000 && matches.length < matchesRequested);

  return matches;
}
