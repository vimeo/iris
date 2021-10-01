import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const AlignLeft: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20C5.55228 20 6 19.5523 6 19V5C6 4.44772 5.55228 4 5 4ZM10 14V10H18V14H10ZM8 9C8 8.44772 8.44772 8 9 8H19C19.5523 8 20 8.44772 20 9V15C20 15.5523 19.5523 16 19 16H9C8.44771 16 8 15.5523 8 15V9Z"
      />
    </svg>
  )
);

AlignLeft.tags = [
  'align',
  'editor',
  'left',
  'line',
  'media',
  'placement',
  'position',
];
