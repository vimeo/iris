import React, { Ref, SVGAttributes, forwardRef } from 'react';

export const Facebook = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    return (
      <svg viewBox="0 0 20 20" ref={ref} {...props}>
        <path
          d="M8.2 7H6v3h2.2v9H12v-9h2.7l.3-3h-3V5.7c0-.7.1-1 .8-1H15V1h-2.8c-2.8 0-4 1.2-4 3.5V7z"
          fill="#474747"
        />
      </svg>
    );
  },
);
