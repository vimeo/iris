import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const UploadCloud = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M18 8.48a7.16 7.16 0 0 0-1.84-4.76A5.81 5.81 0 0 0 6.92 5a5.24 5.24 0 0 0-4.69 3.85A4.91 4.91 0 0 0 0 13a5.13 5.13 0 0 0 5 5h10a5.1 5.1 0 0 0 5-4.94 5.89 5.89 0 0 0-2-4.58zM15 16h-4v-3.59l1.29 1.29 1.41-1.41-3.7-3.7-3.71 3.7L7.7 13.7 9 12.41V16H5a3.16 3.16 0 0 1-3-3 2.91 2.91 0 0 1 1.52-2.58l.4-.2.08-.44A3.38 3.38 0 0 1 7.59 7h.7l.24-.66A3.69 3.69 0 0 1 12 4a3.73 3.73 0 0 1 2.72 1.12A5.45 5.45 0 0 1 16 9v.54l.45.3A3.79 3.79 0 0 1 18 13.06 3.09 3.09 0 0 1 15 16z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
