import { caution } from './caution';
import { negative } from './negative';
import { positive } from './positive';

export const statuses = ['caution', 'negative', 'positive'] as const;

export type Status = typeof statuses[number];

export const status = {
  caution,
  negative,
  positive,
};
