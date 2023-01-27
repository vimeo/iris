import { sm } from './sm';
import { xl } from './xl';

export const upsellSizes = ['sm', 'xl'] as const;

export type Upsell = typeof upsellSizes[number];

export const upsell = {
  sm,
  xl,
};
