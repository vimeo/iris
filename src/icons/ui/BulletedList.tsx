import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const BulletedList = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        fill="#1a2e3b"
        d="M0 3h2v2H0zm0 6h2v2H0zm0 6h2v2H0zM6 3h13a1 1 0 0 1 1 1 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1 1 1 0 0 1 1-1zm0 6h13a1 1 0 0 1 1 1 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1 1 1 0 0 1 1-1zm0 6h13a1 1 0 0 1 1 1 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1 1 1 0 0 1 1-1z"
      />
    </svg>
  )
);
