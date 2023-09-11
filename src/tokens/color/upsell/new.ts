import { Token, readToken } from '../../util';
import { violet } from '../../../color/colors';

const dark = violet(400);
const light = violet(400);

const token: Token = {
  default: 'light',
  type: 'COLOR',
  modes: { dark, light },
};

export const New = readToken(token);
