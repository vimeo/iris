import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const TagFilled = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg data-name="Layer 1" viewBox="0 0 20 20" ref={ref} {...props}>
      <defs>
        <mask
          id="tag-filled_svg__a"
          x={1}
          y={1}
          width={17.97}
          height={17.97}
          maskUnits="userSpaceOnUse">
          <path fill="#fff" d="M1 1h17.97v17.97H1V1z" />
        </mask>
      </defs>
      <g mask="url(#tag-filled_svg__a)">
        <path
          d="M13.71 6.66a1.44 1.44 0 0 1 0-2.39 1.42 1.42 0 0 1 1.6 0 1.44 1.44 0 1 1-1.6 2.39m5-4l-1.42-1.37a1 1 0 0 0-.77-.29L11 1.39a.57.57 0 0 0-.39.18L1.18 11a.62.62 0 0 0 0 .87l7 7a.62.62 0 0 0 .87 0l9.4-9.4a.57.57 0 0 0 .13-.47L19 3.45a1 1 0 0 0-.29-.77"
          fill="#1a2e3b"
        />
      </g>
    </svg>
  )
);
