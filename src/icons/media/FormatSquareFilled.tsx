import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const FormatSquareFilled: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" ref={ref} {...props}>
      <path
        d="M10.6667 16C10.6667 13.0545 13.0546 10.6667 16.0001 10.6667H48.0001C50.9456 10.6667 53.3334 13.0545 53.3334 16V48C53.3334 50.9455 50.9456 53.3334 48.0001 53.3334H16.0001C13.0546 53.3334 10.6667 50.9455 10.6667 48V16Z"
        fill="white"
      />
    </svg>
  )
);

FormatSquareFilled.tags = [
  'aspect',
  'aspectratio',
  'format',
  'ratio',
  'screen',
  'shape',
  'size',
  'square',
  'video',
];
