import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const ForHireYes = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 36 36" ref={ref} {...props}>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(-1643 -864)">
          <g transform="translate(1619 840)">
            <g transform="translate(24 24)">
              <circle cx="18" cy="18" r="18" fill="#4EC437" />
              <rect
                x="10"
                y="13"
                width="17"
                height="12"
                rx="1.8947"
                fill="#FFFFFF"
              />
              <rect
                x="15"
                y="10"
                width="7"
                height="6"
                rx="1.8947"
                stroke="#FFFFFF"
                strokeWidth="2"
              />
              <circle
                cx="24"
                cy="23"
                r="5"
                fill="#FFFFFF"
                stroke="#4EC437"
              />
              <polyline
                points="26.099 21.619 23.5 24.515 21.959 23.257"
                stroke="#4EC437"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
);
