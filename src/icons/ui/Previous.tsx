import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Previous = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 9 12" ref={ref} {...props}>
      <g fill="none">
        <g transform="translate(-227 -695)" fill="#fff">
          <g transform="translate(227 695)">
            <rect x="1.4554e-12" width="1.8" height="12" />
            <polygon
              transform="translate(4.55 6) rotate(-90) translate(-4.55 -6)"
              points="4.55 1.95 10.55 10.05 -1.45 10.05"
            />
          </g>
        </g>
      </g>
    </svg>
  )
);
