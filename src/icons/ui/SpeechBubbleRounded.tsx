import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const SpeechBubbleRounded = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 18" ref={ref} {...props}>
      <path
        d="M6 18v-6h-.5A5.51 5.51 0 0 1 0 6.5v-1A5.51 5.51 0 0 1 5.5 0h9A5.51 5.51 0 0 1 20 5.5v1a5.51 5.51 0 0 1-5.5 5.5H12zM5.5 2A3.5 3.5 0 0 0 2 5.5v1A3.5 3.5 0 0 0 5.5 10H8v3.17L11.17 10h3.33A3.5 3.5 0 0 0 18 6.5v-1A3.5 3.5 0 0 0 14.5 2z"
        fill="#1a2e3b"
      />
    </svg>
  ),
);
