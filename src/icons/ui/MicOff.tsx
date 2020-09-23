import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const MicOff = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M7.362 11.007A3.99 3.99 0 0 1 6 8V4a4 4 0 1 1 8 0v1.106l4.336-3.853a1 1 0 1 1 1.328 1.494l-18 16a1 1 0 0 1-1.328-1.494l4.025-3.578a7.967 7.967 0 0 1-2.28-4.533 1 1 0 1 1 1.98-.284 5.973 5.973 0 0 0 1.798 3.485l1.503-1.336zm2.394 2.988a6.001 6.001 0 0 0 6.184-5.137 1 1 0 0 1 1.979.284A8.002 8.002 0 0 1 11 15.938V20H9v-4.062a7.965 7.965 0 0 1-1.165-.235l1.92-1.708z"
        fillRule="evenodd"
      />
    </svg>
  )
);
