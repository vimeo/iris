import { blue } from '../../../color';
import { Token, readToken } from '../../util';

const dark = blue(500);
const light = blue(500);

const token: Token = {
  default: 'light',
  type: 'COLOR',
  modes: { dark, light },
};

export const primary = readToken(token);
