import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Plus = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        d="M18 11h-5V6a1 1 0 1 0-2 0v5H6a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0v-5h5a1 1 0 0 0 0-2z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
