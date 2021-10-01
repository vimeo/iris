import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const AlignMiddle: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 8V12V16H14V12V8H10ZM16 11V7C16 6.44772 15.5523 6 15 6H9C8.44772 6 8 6.44772 8 7V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H8V17C8 17.5523 8.44772 18 9 18H15C15.5523 18 16 17.5523 16 17V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H16Z"
      />
    </svg>
  )
);

AlignMiddle.tags = [
  'align',
  'center',
  'editor',
  'line',
  'media',
  'middle',
  'placement',
  'position',
];
