import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const LowerThird: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6H20V18H4V6ZM2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM7 12C6.44772 12 6 12.4477 6 13V15C6 15.5523 6.44772 16 7 16H13C13.5523 16 14 15.5523 14 15V13C14 12.4477 13.5523 12 13 12H7Z"
      />
    </svg>
  )
);

LowerThird.tags = [
  'align',
  'bottom',
  'brand',
  'broadcast',
  'editor',
  'live',
  'logomark',
  'media',
  'overlay',
  'placement',
  'player',
  'position',
  'watermark',
];
