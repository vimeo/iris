import { green } from '../../../color';
import { Token, readToken } from '../../util';

const dark = green(500);
const light = green(500);

const token: Token = {
  default: 'light',
  type: 'COLOR',
  modes: { dark, light },
};

export const positive = readToken(token);
