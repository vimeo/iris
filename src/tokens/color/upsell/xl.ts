import { Token, readToken } from '../../util';

const dark = 'linear-gradient(to right,#00AA59,#00B191,#0098C8)';
const light = 'linear-gradient(to right,#00B655,#00B285,#00A9D5)';

const token: Token = {
  default: 'light',
  type: 'COLOR',
  modes: { dark, light },
};

export const xl = readToken(token);
