import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const CircleInfo = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        d="M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8z"
        fill="#1a2e3b"
      />
      <path
        fill="#1a2e3b"
        d="M11 11h2v6h-2zm1-2a1 1 0 0 1-1-1 1.46 1.46 0 0 1 0-.2.63.63 0 0 1 .06-.18.77.77 0 0 1 .09-.18 1.48 1.48 0 0 1 .12-.15.92.92 0 0 1 .33-.21 1 1 0 0 1 1.09.21A1.05 1.05 0 0 1 13 8a.84.84 0 0 1-.08.38 1 1 0 0 1-.21.33l-.15.12-.18.09-.18.08z"
      />
    </svg>
  )
);
