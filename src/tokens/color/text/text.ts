import { grayscale, slate } from '../../../color';

import { Token, readToken, TokenValue, clamp } from '../../util';

export const text = (grade: number) => readToken(token, grade);

const token: Token = {
  default: 'light',
  type: 'COLOR',
  modes: { dark, light },
};

function dark(grade: number): TokenValue {
  return grayscale(clamp(grade / 2.5));
}

function light(grade: number): TokenValue {
  return slate(clamp(grade / -2 + 800));
}
