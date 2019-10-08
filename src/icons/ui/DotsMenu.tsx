import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const DotsMenu = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <circle cx={3} cy={10} r={2} fill="#1a2e3b" />
      <circle cx={10} cy={10} r={2} fill="#1a2e3b" />
      <circle cx={17} cy={10} r={2} fill="#1a2e3b" />
    </svg>
  ),
);
