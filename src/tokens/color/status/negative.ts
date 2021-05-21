import { red } from '../../../color';
import { Token, readToken } from '../../util';

const dark = red(500);
const light = red(500);

const token: Token = {
  default: 'light',
  type: 'COLOR',
  modes: { dark, light },
};

export const negative = readToken(token);
