import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Pause = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M7,4H7A1,1,0,0,1,8,5V15a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4Z"
        fill="#1a2e3b"
        fill-rule="evenodd"
      />
      <path
        d="M13,4h0a1,1,0,0,1,1,1V15a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V5A1,1,0,0,1,13,4Z"
        fill="#1a2e3b"
        fill-rule="evenodd"
      />
    </svg>
  )
);
