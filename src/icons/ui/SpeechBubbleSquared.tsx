import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const SpeechBubbleSquared = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 21" ref={ref} {...props}>
      <path
        d="M20 21l-5.83-5H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zM2 2v12h12.91L18 16.65V2z"
        fill="#1a2e3b"
      />
      <path
        d="M14 7H6a1 1 0 1 1 0-2h8a1 1 0 0 1 0 2zm0 4H6a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
