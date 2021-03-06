import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const LockChecked = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <g fill="#1a2e3b">
        <path d="M9 16a1 1 0 0 1-.71-.29l-2-2 1.42-1.42L9 13.59l3.29-3.3 1.42 1.42-4 4A1 1 0 0 1 9 16z" />
        <path d="M15 7V5A5 5 0 0 0 5 5v2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zM7 5a3 3 0 0 1 6 0v2H7zm9 12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z" />
      </g>
    </svg>
  )
);
