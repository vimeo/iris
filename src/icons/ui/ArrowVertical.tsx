import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const ArrowVertical = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path d="M14.5 10.4l-3.4 3.5V2H8.9v11.9l-3.4-3.5L4 11.9l6 6.1 6-6.1z" />
    </svg>
  ),
);
