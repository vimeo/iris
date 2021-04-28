import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Art = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" ref={ref} {...props}>
      <g>
        <circle cx="10" cy="14" r="2" />
        <path
          d="M30,26.2V9.8c1.2-0.4,2-1.5,2-2.8c0-1.7-1.3-3-3-3c-1.3,0-2.4,0.8-2.8,2h-3.8l-5.7-5.7c-0.4-0.4-1-0.4-1.4,0L9.6,6H5.8
				C5.4,4.8,4.3,4,3,4C1.3,4,0,5.3,0,7c0,1.3,0.8,2.4,2,2.8v16.4c-1.2,0.4-2,1.5-2,2.8c0,1.7,1.3,3,3,3c1.3,0,2.4-0.8,2.8-2h20.4
				c0.4,1.2,1.5,2,2.8,2c1.7,0,3-1.3,3-3C32,27.7,31.2,26.6,30,26.2z M16,2.4L19.6,6h-7.2L16,2.4z M26,26H6V10h20V26z"
        />
        <polygon points="18,15 14,21 12,18 8,24 24,24 	" />
      </g>
    </svg>
  )
);
