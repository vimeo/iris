import { Token, readToken } from '../../util';

const dark = 'linear-gradient(to right,#00AA59,#00B191,#0098C8)';
const light = 'linear-gradient(to right,#00BE4C,#00B285,#0095D5)';

const token: Token = {
  default: 'light',
  type: 'COLOR',
  modes: { dark, light },
};

export const sm = readToken(token);
