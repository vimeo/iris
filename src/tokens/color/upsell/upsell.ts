import { sm } from './sm';
import { xl } from './xl';
import { New } from './new';

export const upsellVariants = ['sm', 'xl', 'New'] as const;

export type Upsell = (typeof upsellVariants)[number];

export const upsell = {
  New,
  sm,
  xl,
};
