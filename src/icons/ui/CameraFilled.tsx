import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const CameraFilled = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 14" ref={ref} {...props}>
      <path
        d="M19 1h-1.49a1 1 0 0 0-.72.3L14 4.18V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.82l2.8 2.87a1 1 0 0 0 .72.3H19a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"
        fill="#1a2e3b"
        fillRule="evenodd"
      />
    </svg>
  )
);
