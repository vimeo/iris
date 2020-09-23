import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const PopIn = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M14.99 20h-12a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h3v2h-3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3h2v3a3 3 0 0 1-3 3z"
        fill="#1a2e3b"
      />
      <path
        d="M19.99 1.42L18.59 0l-8.6 8.57V4h-2v7a1 1 0 0 0 1 1h7v-2h-4.58z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
