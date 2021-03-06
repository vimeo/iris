import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Person = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg data-name="Layer 1" viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M10 10a5 5 0 1 1 5-5 5 5 0 0 1-5 5zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm8 18H2v-4a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5zM4 18h12v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
