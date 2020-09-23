import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const VerticalDots = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 18 25" ref={ref} {...props}>
      <g fill="#FFFFFF" stroke="#1A2E3B" strokeOpacity="0.3">
        <circle cx="10" cy="2" r="2.5" />
        <circle cx="10" cy="10" r="2.5" />
        <circle cx="10" cy="18" r="2.5" />
        <circle cx="2" cy="2" r="2.5" />
        <circle cx="2" cy="18" r="2.5" />
        <circle cx="2" cy="10" r="2.5" />
      </g>
    </svg>
  )
);
