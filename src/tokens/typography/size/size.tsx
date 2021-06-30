import { Token, readToken, TokenValue } from '../../util';

export const size = (grade: number) => readToken(token, grade);

const token: Token = {
  default: 'desktop',
  type: 'SIZE',
  modes: {
    desktop,
    //tablet,
    //mobile
  },
};

function desktop(grade: number): TokenValue {
  grade = grade + 100;
  const scale = 1.4;
  const iteration = scale ** (grade / 100);
  const raw = 8.5 + (3 * iteration) / 1.618;

  const rounded = Math.round(raw * 1) / 1;
  const floored = Math.max(rounded, 10);
  return floored;
}
