import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Code = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 16.48" ref={ref} {...props}>
      <path
        d="M4.29 12.95l-4-4a1 1 0 0 1 0-1.41l4-4 1.42 1.41-3.3 3.29 3.29 3.29zm11.42 0l-1.41-1.41 3.29-3.3-3.3-3.29 1.41-1.41 4 4a1 1 0 0 1 0 1.41zm-8.68 3.057l3.996-16 1.94.485-3.995 16z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
