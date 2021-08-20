import styled, { css } from 'styled-components';
import { white } from '../../color';

export const hidden = css`
  border: none;
  box-shadow: none;
  border-radius: 0px;
  background: transparent;
`;

export const SliderStyled = styled.input`
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
      border: 0.24rem solid ${white};
      transform: scale(1.2) translateY(0.75px);
    }
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 0px;
    cursor: pointer;
    ${hidden};
  }

  &::-webkit-slider-thumb {
    border: 0.25rem solid ${white};
    height: 36px;
    width: 36px;
    border-radius: 20px;
    background: transparent;
    cursor: pointer;
    appearance: none;
    margin-top: -12.5px;
    transition: 80ms ease-in-out;

    ${(p) =>
      p.theme.name === 'dark'
        ? css`
            box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2),
              inset 0 0 2px 2px rgba(0, 0, 0, 0.15);
          `
        : css`
            box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.275),
              inset 0 0 2px 2px rgba(0, 0, 0, 0.2334);
          `};
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
