import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Mic = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M11 15.938V20H9v-4.062a8.002 8.002 0 0 1-6.919-6.796 1 1 0 1 1 1.98-.284 6.001 6.001 0 0 0 11.878 0 1 1 0 0 1 1.98.284A8.002 8.002 0 0 1 11 15.938zM10 0a4 4 0 0 1 4 4v4a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4z"
        fillRule="evenodd"
      />
    </svg>
  ),
);
