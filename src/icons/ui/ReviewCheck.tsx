import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const ReviewCheck = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M19 18.61V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12.54l4.29 3.69a.1.1 0 0 0 .17-.08z"
        fill="none"
        stroke="#1a2e3b"
        strokeWidth={2}
      />
      <path
        fill="none"
        stroke="#1a2e3b"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.5 5.5l-4.39 4.75L6.5 7.5"
      />
    </svg>
  ),
);
