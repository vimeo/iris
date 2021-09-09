import React, { useState } from 'react';
import styled from 'styled-components';
import { readableColor, rgba } from 'polished';

import { Story } from '../../storybook';
import { Header } from '../../typography';

export function ColorStory(colorName, colorFn) {
  const [grade, gradeSet] = useState(500);
  const hex = colorFn(grade);

  const color = { grade, hex, rgb: rgba(hex, 1) };
  const fontColor = readableColor(color.hex);

  return (
    <Story title="Colors" width="100%" flex>
      <Header size="3">{colorName}</Header>
      <div
        style={{
          background: color.hex,
          border: `3px solid ${fontColor}`,
          borderRadius: '0.2rem',
          padding: '1rem',
          margin: '1rem 0',
          width: '100%',
        }}>
        <h1 style={{ color: fontColor }}>{color.grade}</h1>
        <h1 style={{ color: fontColor }}>{color.hex}</h1>
        <h1 style={{ color: fontColor }}>{color.rgb}</h1>
      </div>
      <input
        type="range"
        value={grade}
        min="0"
        max="1000"
        step="10"
        onChange={(event) => gradeSet(parseInt(event.target.value))}
        style={{
          margin: '0 0 2rem',
          width: '100%',
          cursor: 'pointer',
        }}
      />

      <ColorPalette color={colorFn} />
    </Story>
  );
}

export function ColorPalette({ color }) {
  return (
    <div
      style={{
        width: '100%',
        padding: '1rem 0 0 0',
        marginBottom: '1rem',
      }}>
      {[0.5, 1, 2, 3, 3.5, 4, 5, 6, 7, 8, 8.5, 9, 9.5].map(
        (num, i) => {
          return (
            <ColorSwatch
              color={color(num * 100)}
              title={num * 100}
              key={i}
            />
          );
        }
      )}
    </div>
  );
}

function ColorSwatch({ color, title = color, ...props }) {
  return (
    <div
      style={{ display: 'inline-block', overflow: 'hidden' }}
      {...props}>
      <ColorSwatchStyled color={color} />
      <Header size="5">{title}</Header>
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
