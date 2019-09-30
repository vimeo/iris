import React, { SVGProps } from 'react';
export const CircleFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" {...props}>
    <circle cx={10} cy={10} r={10} fill="#FF4D4D" />
  </svg>
);
