import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const CircleRightArrow = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M10 20a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8z"
        fill="#1a2e3b"
      />
      <path
        d="M14.71 9.29l-4-4-1.42 1.42L11.59 9H6v2h5.59L9.3 13.29l1.41 1.41 4-4a1 1 0 0 0 0-1.41z"
        fill="#1a2e3b"
      />
    </svg>
  ),
);
