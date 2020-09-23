import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Comment = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M6 20v-6h-.5A5.51 5.51 0 0 1 0 8.5v-1A5.51 5.51 0 0 1 5.5 2h9A5.51 5.51 0 0 1 20 7.5v1a5.51 5.51 0 0 1-5.5 5.5H12zM5.5 4A3.47 3.47 0 0 0 2 7.5v1A3.47 3.47 0 0 0 5.5 12H8v3.19L11.19 12h3.31A3.47 3.47 0 0 0 18 8.5v-1A3.47 3.47 0 0 0 14.5 4z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
