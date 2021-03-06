import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const PersonFilled = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg data-name="Layer 1" viewBox="0 0 20 20" ref={ref} {...props}>
      <path d="M18 20H2v-4a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5zm-8-10a5 5 0 1 1 5-5 5 5 0 0 1-5 5z" />
    </svg>
  )
);
