import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const EndScreen: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 48 48" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 12H8V36H40V12ZM8 8C5.79086 8 4 9.79086 4 12V36C4 38.2091 5.79086 40 8 40H40C42.2091 40 44 38.2091 44 36V12C44 9.79086 42.2091 8 40 8H8Z"
        fill="currentColor"
      />
      <rect
        x="12"
        y="18"
        width="24"
        height="4"
        rx="1"
        fill="currentColor"
      />
      <rect
        x="18"
        y="26"
        width="12"
        height="4"
        rx="1"
        fill="currentColor"
      />
    </svg>
  )
);

EndScreen.tags = ['end screen'];
