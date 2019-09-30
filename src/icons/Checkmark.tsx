import React, { SVGProps } from 'react';
export const Checkmark = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      d="M10 18a1 1 0 0 1-.71-.29l-5-5L5.7 11.3l4.3 4.29 9.29-9.29 1.41 1.41-10 10a1 1 0 0 1-.7.29z"
      fill="#1a2e3b"
    />
  </svg>
);
