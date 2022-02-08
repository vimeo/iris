import { Token, readToken } from '../../../util';

const dark =
  'conic-gradient(#e65050,#764cb4,#42cbff,#7fd02d,#cddb2f,#e8d633,#fdad4f,#e65050)';
const light =
  'conic-gradient(#e65050,#764cb4,#42cbff,#7fd02d,#cddb2f,#e8d633,#fdad4f,#e65050)';

const token: Token = {
  default: 'light',
  type: 'COLOR',
  modes: { dark, light },
};

export const sm = readToken(token);
