import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Bell = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg data-name="Layer 1" viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M7.26 18.78A3.39 3.39 0 0 0 10 20a3.39 3.39 0 0 0 2.74-1.22l.54-.78H6.72zm10.64-3.23l-1.9-3.8V8a5.53 5.53 0 0 0-5-5.93V0H9v2.07A5.53 5.53 0 0 0 4 8v3.76l-1.89 3.79A1 1 0 0 0 3 17h14a1 1 0 0 0 .85-.47 1 1 0 0 0 .05-.98zM4.62 15l1.27-2.55A1 1 0 0 0 6 12V8c0-3.48 2.51-4 4-4s4 .52 4 4v4a1.14 1.14 0 0 0 .1.45L15.39 15z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
