import { primary } from './primary';
import { secondary } from './secondary';
import { tertiary } from './tertiary';

export const formats = ['primary', 'secondary', 'tertiary'] as const;

export type Format = (typeof formats)[number];

export const format = {
  primary,
  secondary,
  tertiary,
};
