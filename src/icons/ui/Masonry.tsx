import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Masonry = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <g stroke="#1a2e3b" strokeWidth="2" fill="none">
        <rect x="1" y="1" width="7" height="10" rx="2" />
        <rect x="12" y="1" width="7" height="4" rx="2" />
        <rect x="1" y="15" width="7" height="4" rx="2" />
        <rect x="12" y="9" width="7" height="10" rx="2" />
      </g>
    </svg>
  )
);
