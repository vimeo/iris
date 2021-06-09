import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const Minus: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <rect x="5" y="11" width="14" height="2" rx="1" />
    </svg>
  )
);

Minus.tags = [
  'delete',
  'editor',
  'line',
  'math',
  'media',
  'minus',
  'remove',
  'subtract',
  'symbol',
];
