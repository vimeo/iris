import { yellow } from '../../../color';
import { Token, readToken } from '../../util';

const dark = yellow(500);
const light = yellow(500);

const token: Token = {
  default: 'light',
  type: 'COLOR',
  modes: { dark, light },
};

export const caution = readToken(token);
