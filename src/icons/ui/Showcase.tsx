import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Showcase = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M7 20H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM2 2v16h5V2zM18 9h-5a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2zm-5-7v5h5V2zM18 20h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2zm-5-7v5h5v-5z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
