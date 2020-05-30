import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Split = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="800 1212 24 24" ref={ref} {...props}>
      <path
        fill="#474747"
        d="M818,1225.2h-12c-0.55,0-1,0.45-1,1s0.45,1,1,1h4l1.11,2.21c0.25,0.49,0.85,0.69,1.34,0.45
   c0.19-0.1,0.35-0.25,0.45-0.45l1.11-2.21h4c0.55,0,1-0.45,1-1S818.55,1225.2,818,1225.2z"
      />
      <path
        fill="#474747"
        d="M806,1221.62h12c0.55,0,1-0.45,1-1s-0.45-1-1-1h-4l-1.11-2.21c-0.1-0.19-0.25-0.35-0.45-0.45
   c-0.49-0.25-1.09-0.05-1.34,0.45l-1.11,2.21h-4c-0.55,0-1,0.45-1,1S805.45,1221.62,806,1221.62z"
      />
    </svg>
  ),
);
