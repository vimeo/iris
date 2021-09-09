import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const BarChartOutlined = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <rect
        id="Rectangle"
        x="7"
        y="0"
        width="2"
        height="16"
        rx="1"></rect>
      <rect
        id="Rectangle"
        x="3"
        y="6"
        width="2"
        height="10"
        rx="1"></rect>
      <rect
        id="Rectangle"
        x="11"
        y="3"
        width="2"
        height="13"
        rx="1"></rect>
      <rect
        id="Rectangle"
        x="15"
        y="10"
        width="2"
        height="6"
        rx="1"></rect>
      <rect
        id="Rectangle"
        transform="translate(10.000000, 19.000000) rotate(90.000000) translate(-10.000000, -19.000000) "
        x="9"
        y="9"
        width="2"
        height="20"
        rx="1"></rect>
    </svg>
  )
);
