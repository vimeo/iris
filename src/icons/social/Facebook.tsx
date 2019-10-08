import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Facebook = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M18.89.07H1.1A1.1 1.1 0 0 0 0 1.17v17.72A1.1 1.1 0 0 0 1.09 20h9.59v-7.73H8.07v-3h2.6V7.08a3.63 3.63 0 0 1 3.88-4 21.45 21.45 0 0 1 2.33.12v2.69h-1.6c-1.26 0-1.5.59-1.5 1.46v1.93h3l-.39 3h-2.6V20h5.1A1.1 1.1 0 0 0 20 18.9V1.17a1.1 1.1 0 0 0-1.11-1.1z"
        fill="#3c5a99"
      />
    </svg>
  ),
);
