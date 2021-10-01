import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Video = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3H21V21H3V3ZM0 3C0 1.34315 1.34315 0 3 0H21C22.6569 0 24 1.34315 24 3V21C24 22.6569 22.6569 24 21 24H3C1.34315 24 0 22.6569 0 21V3ZM10.0453 7.28889C9.37706 6.89724 8.53647 7.38119 8.53963 8.15571L8.5712 15.8812C8.57436 16.6544 9.41633 17.1316 10.0814 16.7372L16.6167 12.8606C17.2718 12.472 17.2693 11.5229 16.6122 11.1378L10.0453 7.28889Z"
      />
    </svg>
  )
);
