import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const LockFilled = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M16 8h-1V5A5 5 0 0 0 5 5v3H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zM7 5a3 3 0 0 1 6 0v3H7z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
