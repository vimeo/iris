import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Filters = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M1 5h11.18a3 3 0 0 0 5.64 0H19a1 1 0 0 0 0-2h-1.18a3 3 0 0 0-5.64 0H1a1 1 0 0 0 0 2zm14-2a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm4 6H7.82a3 3 0 0 0-5.64 0H1a1 1 0 0 0 0 2h1.18a3 3 0 0 0 5.64 0H19a1 1 0 0 0 0-2zM5 11a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm14 4h-1.18a3 3 0 0 0-5.64 0H1a1 1 0 0 0 0 2h11.18a3 3 0 0 0 5.64 0H19a1 1 0 0 0 0-2zm-4 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
