import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Lock = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M15 8V5A5 5 0 0 0 5 5v3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3zM7 5a3 3 0 0 1 6 0v3H7zm9 12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
