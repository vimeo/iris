import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const PopOut = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M16 17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5V2H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5h-2z"
        fill="#1a2e3b"
      />
      <path
        d="M19 0h-7v2h4.59l-8 8L10 11.41l8-8V8h2V1a1 1 0 0 0-1-1z"
        fill="#1a2e3b"
      />
    </svg>
  ),
);
