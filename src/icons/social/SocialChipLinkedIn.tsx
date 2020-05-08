import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const SocialChipLinkedIn = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M18.5 0h-17C.7 0 0 .6 0 1.4v17.1c0 .9.7 1.5 1.5 1.5h17c.8 0 1.5-.6 1.5-1.4V1.4c0-.8-.7-1.4-1.5-1.4z"
        fill="#007bb5"
      />
      <path
        d="M3 7.5h3V17H3V7.5zm1.4-4.7c.9 0 1.7.8 1.7 1.7 0 .9-.8 1.7-1.7 1.7-1 0-1.7-.8-1.7-1.7 0-1 .8-1.7 1.7-1.7m3.4 4.7h2.8v1.3C11 8 12 7.3 13.4 7.3c3 0 3.6 2 3.6 4.5V17h-3v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.5V17h-3V7.5z"
        fill="#fff"
      />
    </svg>
  ),
);
