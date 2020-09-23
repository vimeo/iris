import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const CircleWarning = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="#1a2e3b"
        d="M11 7h2v6h-2zm1 10a1 1 0 0 1-.38-.08 1.15 1.15 0 0 1-.33-.21 1 1 0 0 1-.21-1.09 1 1 0 0 1 .21-.33A1 1 0 0 1 13 16a1 1 0 0 1-1 1z"
      />
      <path
        d="M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
