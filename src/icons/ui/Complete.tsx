import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Complete = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <title>Complete@2x</title>
      <circle cx="10" cy="10" r="10" fill="#4ec437" opacity="0.15" />
      <path
        d="M8.67,14a.67.67,0,0,1-.47-.2L4.86,10.47l.94-.94,2.87,2.86L14.2,6.86l.94.94-6,6A.67.67,0,0,1,8.67,14Z"
        fill="#4ec437"
      />
    </svg>
  )
);
