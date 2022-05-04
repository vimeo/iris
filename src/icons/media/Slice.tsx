import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const Slice: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C12.5523 2 13 2.44772 13 3L13 21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21L11 3C11 2.44772 11.4477 2 12 2Z"
        fill="#23313B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 7C4.44772 7 4 7.44772 4 8V16C4 16.5523 4.44772 17 5 17H8C8.55228 17 9 17.4477 9 18C9 18.5523 8.55228 19 8 19H5C3.34315 19 2 17.6569 2 16V8C2 6.34315 3.34315 5 5 5H8C8.55228 5 9 5.44772 9 6C9 6.55228 8.55228 7 8 7H5Z"
        fill="#23313B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 17C19.5523 17 20 16.5523 20 16L20 8C20 7.44772 19.5523 7 19 7L16 7C15.4477 7 15 6.55228 15 6C15 5.44771 15.4477 5 16 5L19 5C20.6569 5 22 6.34315 22 8L22 16C22 17.6569 20.6569 19 19 19L16 19C15.4477 19 15 18.5523 15 18C15 17.4477 15.4477 17 16 17L19 17Z"
        fill="#23313B"
      />
    </svg>
  )
);

Slice.tags = [
  'arrow',
  'clip',
  'control',
  'cursor',
  'cut',
  'edit',
  'editor',
  'media',
  'player',
  'scrub',
  'scrubber',
  'slice',
  'split',
  'timeline',
  'timmer',
  'trim',
  'video',
];
