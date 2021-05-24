import { slate } from '../../../color';
import { Token, readToken } from '../../util';

const dark = slate(700);
const light = slate(700);

const token: Token = {
  default: 'light',
  type: 'COLOR',
  modes: { dark, light },
};

export const tertiary = readToken(token);
