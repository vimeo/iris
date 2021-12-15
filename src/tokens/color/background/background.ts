import { grayscale, slate } from '../../../color';

import { Token, readToken, TokenValue, clamp } from '../../util';

export const background = (grade: number) => readToken(token, grade);

const token: Token = {
  default: 'light',
  type: 'COLOR',
  modes: { dark, light },
};

function dark(grade: number): TokenValue {
  return grayscale(clamp(900 + grade / 10));
}

function light(grade: number): TokenValue {
  return slate(clamp((grade + 200) / 4 - 175));
}

background.primary = background(500);
background.secondary = background(1000);
