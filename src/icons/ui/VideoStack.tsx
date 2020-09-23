import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const VideoStack = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M14 2v12H2V2h12m0-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
        fill="#1a2e3b"
      />
      <path
        d="M5.6 5.51c0-.55.39-.77.86-.5l4.28 2.5a.54.54 0 0 1 0 1l-4.28 2.57c-.47.28-.86.07-.86-.49zM16 20a4 4 0 0 0 4-4V5a2 2 0 0 0-2-2v13a2 2 0 0 1-2 2H3a2 2 0 0 0 2 2z"
        fill="#192e3b"
        fillRule="evenodd"
      />
    </svg>
  )
);
