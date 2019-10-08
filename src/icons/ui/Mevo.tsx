import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Mevo = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M15 20H5a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3zM5 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"
        fill="#1a2e3b"
      />
      <path
        d="M10 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm-3 8h6a1 1 0 0 1 1 1 1 1 0 0 1-1 1H7a1 1 0 0 1-1-1 1 1 0 0 1 1-1z"
        fill="#1a2e3b"
      />
      <circle cx={10} cy={8} r={1} fill="#1a2e3b" />
    </svg>
  ),
);
