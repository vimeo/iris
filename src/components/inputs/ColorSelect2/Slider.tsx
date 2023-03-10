import React from 'react';
import styled, { css } from 'styled-components';
import { hsl } from 'polished';

import { SliderStyled } from './Slider.style';

export function HueSlider(props) {
  return <Slider kind="hue" max="36000" step="100" {...props} />;
}

export function Slider({ dragging, kind, colorMeta, ...props }) {
  const { HEX, HSL } = colorMeta;

  const style = {
    display: 'flex',
    alignItems: 'center',
    marginTop: dragging ? '-6.5rem' : '1.5rem',
    padding: '0 1.5rem',
  };

  return (
    <div style={style}>
      <Dot
        style={{ background: HEX }}
        aria-label="color preview"
        color={HEX}
      />
      <Wrapper kind={kind} HSL={HSL}>
        <SliderStyled type="range" min="0.01" {...props} />
      </Wrapper>
    </div>
  );
}

export const Dot = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  min-height: 2rem;
  margin: 0 1rem 0 0;
  display: inline-flex;
`;

const Wrapper = styled.div`
  height: 1.9rem;
  width: calc(100% - 1.5rem);
  border-radius: 0.25rem;
  margin: 0;
  position: relative;
  display: inline-flex;
  ${sliderBackground};
`;

function sliderBackground({ kind, HSL }) {
  switch (kind) {
    case 'hue':
      return css`
        background: linear-gradient(
          to right,
          #f00 0%,
          #ff0 17%,
          #0f0 33%,
          #0ff 50%,
          #00f 67%,
          #f0f 83%,
          #f00 100%
        );
      `;
    case 'sat':
      return css`
        background: linear-gradient(
          to right,
          ${hsl(HSL.hue, 0, 0.5)} 0%,
          ${hsl(HSL.hue, 1, 0.5)} 100%
        );
      `;
    case 'lit':
      return css`
        background: linear-gradient(to right, #000 0%, #fff 100%);
      `;
  }
}
