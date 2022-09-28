import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const ChevronLeft = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        transform="rotate(180 12 12)"
        d="M9.71 17.71l-1.42-1.42 4.3-4.29-4.3-4.29 1.42-1.42 5 5a1 1 0 0 1 0 1.41z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
