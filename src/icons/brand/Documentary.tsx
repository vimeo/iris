import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Documentary = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" ref={ref} {...props}>
      <g id="documentary_32">
        <path
          d="M30,14c-0.503,0-0.957,0.192-1.308,0.498l-0.008-0.004L24,18.592V16c0-1.105-0.895-2-2-2h-2.5h-13H4c-1.105,0-2,0.895-2,2
			v13c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2v-2.592l4.684,4.098l0.008-0.004C29.043,30.808,29.497,31,30,31
			c1.105,0,2-0.895,2-2V16C32,14.895,31.105,14,30,14z"
        />
        <circle cx="6.5" cy="7.5" r="6.5" />
        <circle cx="19.5" cy="7.5" r="6.5" />
      </g>
    </svg>
  )
);
