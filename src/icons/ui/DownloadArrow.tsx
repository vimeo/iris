import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const DownloadArrow = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 18 19" ref={ref} {...props}>
      <path
        d="M9 16a1 1 0 0 0 .71-.29l7-7-1.42-1.42-5.29 5.3V0H8v12.59l-5.29-5.3-1.42 1.42 7 7A1 1 0 0 0 9 16zm8 1H1a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
