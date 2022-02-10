import React, { useState } from 'react';
import styled from 'styled-components';
import { parseToRgb, rgb } from 'polished';

import { contrast } from './color-contrast';

import { Button, ColorSelect } from '../components';

export default { title: 'Figma/plugins/contrast' };

export function Contrast() {
  const [colors, colorsSet] = useState({
    text: '#000',
    background: '#eee',
  });

  const textRGB = parseToRgb(colors.text);
  const backgroundRGB = parseToRgb(colors.background);

  const data = contrast(textRGB, backgroundRGB);

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

function Scores({ data: { WCAG, APCA } }) {
  WCAG = parseFloat(WCAG.split(':')[0]);
  APCA = Math.abs(parseFloat(APCA));

  return (
    <ScoresStyled>
      <Score requirement={WCAG >= 3}>WCAG 2.2 A</Score>
      <Score requirement={WCAG >= 4.5}>WCAG 2.2 AA</Score>
      <Score requirement={WCAG >= 7}>WCAG 2.2 AAA</Score>
      <Score requirement={APCA >= 60}>APCA 60</Score>
      <Score requirement={APCA >= 75}>APCA 75</Score>
      <Score requirement={APCA >= 90}>APCA 90</Score>
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
        padding: '0.5rem 0',
        height: '3rem',
        transition: '120ms ease-in-out',
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
    width: '1.75rem',
    height: '1.75rem',
    borderRadius: '0.25rem',
  };

  let color;
  const colors = findA11yColors(color);

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

function chroma(a: any) {
  return a;
}

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

function colorShift(color, transformatio, multiplier) {
  const colorShifted = color;
  return colorShifted;
}

function findA11yColors(color, matchesRequested = 5) {
  const matches = [];
  let [l, c, h] = chroma(color).lch();

  function transformationContrastCheck(transformation, multiplier) {
    const color = chroma({ l, c, h });

    const colorCandidate = colorShift(
      color,
      transformation,
      multiplier
    );

    let { APCA, WCAG } = contrast(white, colorCandidate);
    (WCAG as unknown as number) = parseFloat(WCAG.split(':')[0]);

    if (APCA > 75 && (WCAG as unknown as number) > 4.5) {
      matches.push(colorCandidate);
    }
  }

  do {
    transformations.map(transformationContrastCheck);
  } while (matches.length < matchesRequested);

  return matches;
}
