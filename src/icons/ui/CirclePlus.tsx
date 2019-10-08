import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const CirclePlus = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      id="circle-plus_svg__Layer_1"
      x={0}
      y={0}
      viewBox="0 0 20 20"
      xmlSpace="preserve"
      ref={ref}
      {...props}
    >
      <path
        className="circle-plus_svg__st0"
        d="M10 20C4.5 20 0 15.5 0 10S4.5 0 10 0s10 4.5 10 10-4.5 10-10 10zm0-18c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"
      />
      <path
        className="circle-plus_svg__st0"
        d="M14 9h-3V6H9v3H6v2h3v3h2v-3h3z"
      />
    </svg>
  ),
);
