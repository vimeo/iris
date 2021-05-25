import { grayscale, slate } from '../../../color';
import { Token, readToken } from '../../util';

const dark = grayscale(680);
const light = slate(100);

const token: Token = {
  default: 'light',
  type: 'COLOR',
  modes: { dark, light },
};

export const stroke = readToken(token);
