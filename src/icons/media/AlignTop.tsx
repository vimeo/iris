import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const AlignTop: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6H19C19.5523 6 20 5.55228 20 5C20 4.44772 19.5523 4 19 4H5ZM10 18V10H14V18H10ZM8 9C8 8.44771 8.44772 8 9 8H15C15.5523 8 16 8.44772 16 9V19C16 19.5523 15.5523 20 15 20H9C8.44772 20 8 19.5523 8 19V9Z"
      />
    </svg>
  )
);

AlignTop.tags = [
  'align',
  'editor',
  'line',
  'media',
  'placement',
  'position',
  'top',
];
