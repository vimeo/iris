import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const FormatSquare: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path d="M3.89192 2.91891H19.4595C19.9968 2.91891 20.4325 3.35453 20.4325 3.89189V19.4595C20.4325 19.9968 19.9968 20.4324 19.4595 20.4324H3.89192C3.35456 20.4324 2.91895 19.9968 2.91895 19.4595V3.89189C2.91895 3.35453 3.35456 2.91891 3.89192 2.91891ZM4.86489 4.86486V18.4865H18.4865V4.86486H4.86489Z" />
    </svg>
  )
);

FormatSquare.tags = [
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
