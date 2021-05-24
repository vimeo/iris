import { grayscale } from '../../../color';
import { Token, readToken } from '../../util';

const dark = grayscale(50);
const light = grayscale(700);

const token: Token = {
  default: 'light',
  type: 'COLOR',
  modes: { dark, light },
};

export const secondary = readToken(token);
