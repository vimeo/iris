import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const AlignCenter: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V8H17C17.5523 8 18 8.44772 18 9V15C18 15.5523 17.5523 16 17 16H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V16H7C6.44772 16 6 15.5523 6 15V9C6 8.44772 6.44772 8 7 8H11V5ZM12 14H16V10H12H8V14H12Z"
      />
    </svg>
  )
);

AlignCenter.tags = [
  'align',
  'center',
  'editor',
  'line',
  'media',
  'middle',
  'placement',
  'position',
];
