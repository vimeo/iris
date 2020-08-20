import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Share = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 16 20" ref={ref} {...props}>
      <g fill="#1A2E3B">
        <path d="M7.998 2.414l3.295 3.293 1.414-1.414-4.002-4a1 1 0 00-1.414 0l-3.998 4 1.414 1.414 3.291-3.293z" />
        <path d="M7 2h2v13H7z" />
        <path d="M4.625 8v2H3a1 1 0 00-1 1v6a1 1 0 001 1h10a1 1 0 001-1v-6a1 1 0 00-1-1h-1.625V8H13a3 3 0 013 3v6a3 3 0 01-3 3H3a3 3 0 01-3-3v-6a3 3 0 013-3h1.625z" />
      </g>
    </svg>
  ),
);
