import { grayscale, slate } from '../../../color';

import {
  Token,
  readToken,
  TokenValue,
  clamp,
  round,
} from '../../util';

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
  console.log(round(grade / -1.667 + 900, 0));
  return slate(clamp(round(grade / -1.667 + 900, 0)));
}

text.primary = text(0);
text.secondary = text(600);
