import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const FileTransfer = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M12.5 7.5H8v2h2.09L6.59 13 8 14.41l3.5-3.5V13h2V8.5a1 1 0 0 0-1-1z"
        fill="#1a2e3b"
      />
      <path
        d="M16 20H4a2 2 0 0 1-2-2V6l6-6h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM4 6.83V18h12V2H8.83z"
        fill="#1a2e3b"
      />
    </svg>
  ),
);
