import { Token, readToken } from '../../util';

const dark = '#FF4D4D';
const light = '#FF4D4D';

const token: Token = {
  default: 'light',
  type: 'COLOR',
  modes: { dark, light },
};

export const livestream = readToken(token);
