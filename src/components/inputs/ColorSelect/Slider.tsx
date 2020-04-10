import React from 'react';
import styled, { css } from 'styled-components';
import { hsl } from 'polished';

export const HueSlider = props => (
  <Slider kind="hue" max="36000" step="100" {...props} />
);

export const Slider = ({ kind, HEX, HSL, ...props }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      marginTop: '-1.5rem',
    }}
  >
    <Dot style={{ background: HEX }} />
    <Wrapper kind={kind} HSL={HSL}>
      <SliderStyled type="range" min="0.01" {...props} />
    </Wrapper>
  </div>
);

export const Dot = styled.div`
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  margin: 0 1rem;
  display: inline-flex;
`;

const Wrapper = styled.div`
  height: 1rem;
  width: calc(100% - 4rem);
  border-radius: 0.25rem;
  margin: 1rem 0;
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

const hidden = css`
  border: none;
  box-shadow: none;
  border-radius: 0px;
  background: transparent;
`;

const SliderStyled = styled.input`
  height: 1rem;
  width: 100%;
  margin: 0;
  position: absolute;
  top: 1px;
  background: rgba(0, 0, 0, 0);
  left: 0;
  appearance: none;
  &:focus {
    outline: none;
    &::-webkit-slider-thumb {
      border: 0.25rem solid ${p => p.theme.content.color};
      transform: scale(1.2) translateY(0.5px);
    }
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 0px;
    cursor: pointer;
    ${hidden};
  }
  &::-webkit-slider-thumb {
    box-shadow: none;
    border: 0.25rem solid ${p => p.theme.content.color};
    height: 23px;
    width: 23px;
    border-radius: 15px;
    background: transparent;
    cursor: pointer;
    appearance: none;
    margin-top: -12.5px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: #050505;
  }
  &::-moz-range-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    box-shadow: none;
    ${hidden};
  }
  &::-moz-range-thumb {
    ${hidden};
    height: 26px;
    width: 26px;
    cursor: pointer;
  }
  &::-ms-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-ms-fill-lower {
    ${hidden};
  }
  &::-ms-fill-upper {
    ${hidden};
  }
  &::-ms-thumb {
    ${hidden};
    height: 26px;
    width: 26px;
    cursor: pointer;
  }
  &:focus::-ms-fill-lower {
    background: #000000;
  }
  &:focus::-ms-fill-upper {
    background: #050505;
  }
`;
