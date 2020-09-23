import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const ChevronDownDouble = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        d="M12 18a1 1 0 0 1-.71-.29l-3-3L9.7 13.3l2.3 2.29 2.29-2.29 1.41 1.41-3 3a1 1 0 0 1-.7.29zm2.29-7.29L12 8.41l-2.29 2.3-1.42-1.42 3-3a1 1 0 0 1 1.41 0l3 3z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
