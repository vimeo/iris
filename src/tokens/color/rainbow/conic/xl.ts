import { Token, readToken } from '../../../util';

const dark =
  'conic-gradient(#fa4343,#503873,#73d2f6,#10b5fc,#8bcf0d,#ffc34e,#fb8920,#fa4343)';
const light =
  'conic-gradient(#fa4343,#503873,#73d2f6,#10b5fc,#8bcf0d,#ffc34e,#fb8920,#fa4343)';

const token: Token = {
  default: 'light',
  type: 'COLOR',
  modes: { dark, light },
};

export const xl = readToken(token);
