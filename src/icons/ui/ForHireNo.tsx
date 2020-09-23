import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const ForHireNo = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 36 36" ref={ref} {...props}>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(-1167 -236)">
          <g transform="translate(1145 212)">
            <g transform="translate(22 24)">
              <circle cx="18" cy="18" r="18" fill="#657987" />
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
                stroke="#657987"
              />
              <line
                x1="22"
                x2="26"
                y1="23"
                y2="23"
                stroke="#657987"
                strokeLinecap="square"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
);
