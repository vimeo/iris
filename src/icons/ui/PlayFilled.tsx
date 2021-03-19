import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const PlayFilled = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <polygon
        points="18,12 6,19 6,5 "
        fill="#1A2E3B"
        stroke="#1A2E3B"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  )
);
