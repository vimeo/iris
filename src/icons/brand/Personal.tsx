import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Personal = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" ref={ref} {...props}>
      <g id="personal_32">
        <path
          d="M16,0C7.163,0,0,7.163,0,16s7.163,16,16,16s16-7.163,16-16S24.837,0,16,0z M16,28C9.373,28,4,22.627,4,16
			C4,9.373,9.373,4,16,4s12,5.373,12,12C28,22.627,22.627,28,16,28z"
        />
        <circle cx="9" cy="17" r="2" />
        <circle cx="23" cy="17" r="2" />
        <path d="M10,21c0,0,1,4,6,4s6-4,6-4H10z" />
      </g>
    </svg>
  )
);
