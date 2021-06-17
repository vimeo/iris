import { css } from 'styled-components';
import { rgba } from 'polished';

import { black } from '../../color';
import { readToken, Token } from '../util';

export const edge = (grade: number) => readToken(token, grade);

const token: Token = {
  default: 'light',
  type: 'COLOR',
  modes: { dark, light },
};

function dark(grade: number) {
  const opacity = 0.15 + grade / 7500;
  const width = 0.75 + grade / 1000;

  return css`
    border: ${width}px solid rgba(255, 255, 255, ${opacity});
    box-shadow: ${keyLight(grade)}, ${fillLight(grade)};
  `;
}

function light(grade: number) {
  const width = 1 + grade / 2000;

  return css`
    border: ${width}px solid ${rgba(black, 0.025)};
    box-shadow: ${keyLight(grade)}, ${fillLight(grade)};
  `;
}

function fillLight(grade: number) {
  return shadow({
    blur: 10 + grade / 500,
    spread: 0.5 + grade / 2000,
    opacity: grade / 100000 + grade / 7500,
  });
}

function keyLight(grade: number) {
  return shadow({
    offsetY: 10,
    blur: 6 + grade / 500,
    spread: -5 + grade / 2000,
    opacity: grade / 20000 + grade / 9000,
  });
}

function shadow({
  offsetX = 0,
  offsetY = 0,
  blur = 3,
  spread = 1,
  color = black,
  opacity = 0.2,
}) {
  return `
  ${offsetX}px
  ${offsetY}px
  ${blur}px
  ${spread}px
  ${rgba(color, opacity)}
`;
}
