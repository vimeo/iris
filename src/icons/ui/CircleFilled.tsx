import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const CircleFilled = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <circle cx={10} cy={10} r={10} fill="#FF4D4D" />
    </svg>
  )
);
