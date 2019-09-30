import React, { SVGProps } from 'react';
export const PaintRoller = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" {...props}>
    <path
      d="M19 2h-2.18A3 3 0 0 0 14 0H3a3 3 0 0 0 0 6h11a3 3 0 0 0 2.82-2H18v3h-8a1 1 0 0 0-1 1v2.18A3 3 0 0 0 7 13v4a3 3 0 0 0 6 0v-4a3 3 0 0 0-2-2.82V9h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-5 2H3a1 1 0 0 1 0-2h11a1 1 0 0 1 0 2zm-3 13a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0z"
      fill="#1a2e3b"
    />
  </svg>
);
