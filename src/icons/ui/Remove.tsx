import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Remove = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        d="M12,20 C10.154,20 8.458,19.365 7.103,18.312 L18.312,7.103 C19.366,8.458 20,10.154 20,12 C20,16.411 16.411,20 12,20 M4,12 C4,7.589 7.589,4 12,4 C13.846,4 15.542,4.635 16.897,5.688 L5.688,16.897 C4.634,15.542 4,13.846 4,12 M12,2 C6.486,2 2,6.486 2,12 C2,17.514 6.486,22 12,22 C17.514,22 22,17.514 22,12 C22,6.486 17.514,2 12,2"
        fill="#474747"
      ></path>
    </svg>
  ),
);
