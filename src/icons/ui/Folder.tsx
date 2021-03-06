import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Folder = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 18" ref={ref} {...props}>
      <path
        d="M18 18H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h8l1.33 3H18a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2zM2 2v14h16V5h-8L8.7 2z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
