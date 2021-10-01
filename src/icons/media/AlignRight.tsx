import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const AlignRight: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 4C18.4477 4 18 4.44772 18 5V19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4ZM6 14V10H14V14H6ZM4 9C4 8.44772 4.44772 8 5 8H15C15.5523 8 16 8.44772 16 9V15C16 15.5523 15.5523 16 15 16H5C4.44772 16 4 15.5523 4 15V9Z"
      />
    </svg>
  )
);

AlignRight.tags = [
  'align',
  'editor',
  'line',
  'media',
  'placement',
  'position',
  'right',
];
