import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Error = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <circle cx="10" cy="10" r="10" fill="#ff4d4d" opacity="0.15" />
      <path
        d="M10,16.5A6.5,6.5,0,1,1,16.5,10,6.51,6.51,0,0,1,10,16.5Zm0-12A5.5,5.5,0,1,0,15.5,10,5.51,5.51,0,0,0,10,4.5Z"
        fill="#ff4d4d"
      />
      <path
        d="M10,11.5a.5.5,0,0,1-.5-.5V7a.5.5,0,0,1,1,0v4A.5.5,0,0,1,10,11.5Z"
        fill="#ff4d4d"
      />
      <circle cx="10" cy="13" r="0.5" fill="#ff4d4d" />
    </svg>
  ),
);
