import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const InProgress = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <circle cx="10" cy="10" r="10" fill="#00adef" opacity="0.15" />
      <path
        d="M14.13,10A4.16,4.16,0,0,1,7,13l-.45-.45H8a.5.5,0,0,0,0-1H5.33a.5.5,0,0,0-.5.5v2.67a.51.51,0,0,0,.5.5.5.5,0,0,0,.5-.5V13.18l.48.48A5.17,5.17,0,0,0,15.13,10Z"
        fill="#00adef"
      />
      <path
        d="M14.67,4.83a.5.5,0,0,0-.5.5V6.86l-.52-.52A5.17,5.17,0,0,0,4.83,10h1a4.16,4.16,0,0,1,7.11-2.95l.45.45H12a.5.5,0,0,0,0,1h2.67a.5.5,0,0,0,.5-.5V5.33A.51.51,0,0,0,14.67,4.83Z"
        fill="#00adef"
      />
    </svg>
  )
);
