import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Stats = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 17 17" ref={ref} {...props}>
      <path
        d="M3 17a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1zm4 0a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1zm4 0a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1zm4 0a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1z"
        fill="#1a2e3b"
      />
      <path
        d="M11 7a1 1 0 0 1-.71-.29L6 2.41l-4.29 4.3A1.004 1.004 0 0 1 .29 5.29l5-5a1 1 0 0 1 1.41 0l4.3 4.3L15.29.3a1 1 0 0 1 1.41 1.41l-5 5A1 1 0 0 1 11 7z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
