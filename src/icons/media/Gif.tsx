import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Gif = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <g>
        <path
          fill="#1A2E3B"
          stroke="#1A2E3B"
          strokeWidth={0.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.3,10.4c-0.1-0.6-0.5-1-1-1.2C7,9,6.6,8.9,6.3,8.9C5.6,8.9,5,9.2,4.5,9.7S3.9,11,3.9,12.1
     c0,1.1,0.2,1.8,0.7,2.3s1,0.7,1.7,0.7c0.6,0,1.1-0.2,1.5-0.5s0.6-0.8,0.7-1.4h-2v-1.4h3.6v4.6H8.9l-0.2-1.1
     c-0.3,0.4-0.7,0.7-0.9,0.9c-0.5,0.3-1.1,0.4-1.8,0.4c-1.1,0-2.1-0.4-2.8-1.2C2.4,14.6,2,13.5,2,12.1c0-1.4,0.4-2.5,1.2-3.4
     S5,7.5,6.2,7.5c1.1,0,2,0.3,2.6,0.8s1,1.3,1.1,2.1H8.3z"
        />
        <path
          fill="#1A2E3B"
          strokeWidth={0.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.8,16.3H12V7.7h1.8V16.3z"
        />
        <path
          fill="#1A2E3B"
          strokeWidth={0.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.8,7.7H22v1.5h-4.4v2h3.8v1.5h-3.8v3.6h-1.8V7.7z"
        />
      </g>
    </svg>
  )
);
