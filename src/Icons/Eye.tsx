import React, { SVGProps } from 'react';
export const Eye = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" {...props}>
    <path
      d="M10 17c-3.65 0-7-2.17-9.83-6.44a1 1 0 0 1 0-1.12C3 5.17 6.35 3 10 3s7 2.17 9.83 6.44a1 1 0 0 1 0 1.12C17 14.83 13.65 17 10 17zm-7.78-7c2.37 3.32 5 5 7.78 5s5.41-1.68 7.78-5c-2.37-3.32-5-5-7.78-5s-5.41 1.68-7.78 5z"
      fill="#1a2e3b"
    />
    <circle cx={10} cy={10} r={3} fill="#1a2e3b" />
  </svg>
);
