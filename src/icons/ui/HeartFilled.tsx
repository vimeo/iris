import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const HeartFilled = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M10 18a1.23 1.23 0 0 1-.8-.4 14.25 14.25 0 0 0-4.4-3.7C2.5 12.3 0 10.7 0 7.5a5.52 5.52 0 0 1 1.6-3.9A5.73 5.73 0 0 1 6 2a5.25 5.25 0 0 1 4 1.9A5.85 5.85 0 0 1 14 2c2.9 0 6 2.2 6 5.5s-2.5 4.8-4.8 6.4a15.51 15.51 0 0 0-4.4 3.7 1.23 1.23 0 0 1-.8.4z"
        fill="#1a2e3b"
      />
    </svg>
  ),
);
