import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Link = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 16.48 16.48" ref={ref} {...props}>
      <path
        d="M12.48 9.24a1 1 0 0 1-.71-1.71l2.12-2.12a2.001 2.001 0 0 0-2.83-2.83L8.95 4.7a1 1 0 0 1-1.41-1.41l2.12-2.12a4.002 4.002 0 0 1 5.66 5.66L13.2 8.95a1 1 0 0 1-.72.29zM4 16.48a4 4 0 0 1-2.83-6.83l2.12-2.12A1 1 0 0 1 4.7 8.94l-2.12 2.13a2.001 2.001 0 0 0 2.83 2.83l2.12-2.12a1 1 0 0 1 1.41 1.41l-2.12 2.12A4 4 0 0 1 4 16.48z"
        fill="#1a2e3b"
      />
      <path
        d="M6.83 10.65a1 1 0 0 1-.71-1.71l2.83-2.83a1 1 0 1 1 1.41 1.41l-2.83 2.83a1 1 0 0 1-.7.3z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
