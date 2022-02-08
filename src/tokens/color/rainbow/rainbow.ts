import { conic } from './conic';
import { linear } from './linear';

export const rainbowSizes = ['sm', 'xl'] as const;

export type Rainbow = typeof rainbowSizes[number];

export const rainbow = {
  conic,
  linear,
};
