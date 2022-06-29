import { TokenValue } from '../util';

// space-50 = .25 rem
export const irisSpacing = (size: number): TokenValue => {
  return `${(size * 0.25) / 50}rem`;
};

export const space = (size: number) => irisSpacing(size);
