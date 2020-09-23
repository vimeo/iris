import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Trash = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 18 20" ref={ref} {...props}>
      <path
        d="M17 3h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5h1a1 1 0 0 0 0-2zM7 2h4v1H7zm7 16H4V5h10z"
        fill="#1a2e3b"
      />
      <path
        d="M7.5 9a.5.5 0 0 0-.5.5v4a.5.5 0 1 0 1 0v-4a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v4a.5.5 0 1 0 1 0v-4a.5.5 0 0 0-.5-.5z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
