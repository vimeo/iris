import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const Circle: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path d="M11.9998 20.1351C16.2986 20.1351 19.7835 16.6502 19.7835 12.3513C19.7835 8.05248 16.2986 4.56756 11.9998 4.56756C7.70088 4.56756 4.21597 8.05248 4.21597 12.3513C4.21597 16.6502 7.70088 20.1351 11.9998 20.1351ZM21.7295 12.3513C21.7295 17.7249 17.3733 22.0811 11.9998 22.0811C6.62617 22.0811 2.27002 17.7249 2.27002 12.3513C2.27002 6.97776 6.62617 2.62161 11.9998 2.62161C17.3733 2.62161 21.7295 6.97776 21.7295 12.3513Z" />
    </svg>
  )
);

Circle.tags = [
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
