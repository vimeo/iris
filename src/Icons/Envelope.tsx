import React, { SVGProps } from 'react';
export const Envelope = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      d="M19 4H5C3.3 4 2 5.3 2 7v10c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zM5 6h14c.6 0 1 .4 1 1v.5l-8 6.2-8-6.2V7c0-.6.4-1 1-1zm14 12H5c-.6 0-1-.4-1-1v-7l7.4 5.7c.2.1.4.2.6.2s.4-.1.6-.2L20 10v7c0 .6-.4 1-1 1z"
      fill="#1a2e3b"
    />
  </svg>
);
