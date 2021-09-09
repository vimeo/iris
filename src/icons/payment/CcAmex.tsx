import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const CcAmex = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <defs>
        <mask
          id="cc-amex_svg__a"
          x={0}
          y={3}
          width={20}
          height={14}
          maskUnits="userSpaceOnUse">
          <path
            d="M1.5 3h17A1.5 1.5 0 0 1 20 4.5v11a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 0 15.5v-11A1.5 1.5 0 0 1 1.5 3z"
            fill="#fff"
          />
        </mask>
      </defs>
      <path
        d="M1.5 3h17A1.5 1.5 0 0 1 20 4.5v11a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 0 15.5v-11A1.5 1.5 0 0 1 1.5 3z"
        fill="#1f2d60"
      />
      <g mask="url(#cc-amex_svg__a)">
        <path
          d="M16.37 10l1.56-1.8h-1.14l-1 1.11-.9-1.11h-3.65v3.6h3.58l1-1.13 1 1.13h1.13zm-5.74-1.78H9.25l-.93 2.28-1-2.3H6v3.12L4.69 8.2H3.46L2 11.8h1l.3-.78h1.56l.3.78h1.68V9.24l1.08 2.56h.75l1.08-2.56v2.56h.89zM5.28 7.5h2.46l.54 1.26.51-1.26h6.36l.68.78.69-.78h2.93L17.29 10l2.13 2.5h-3l-.66-.8-.69.8H4.71l-.3-.8h-.69l-.31.8H1l2-5h2.28zM13.94 9h-1.83v.54h1.81v.8h-1.81V11h1.83v.48L15.22 10l-1.28-1.53zM4.06 9l.47 1.2h-1z"
          fill="#fff"
        />
      </g>
    </svg>
  )
);
