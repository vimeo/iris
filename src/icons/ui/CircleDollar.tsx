import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const CircleDollar = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M10 20a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8z"
        fill="#1a2e3b"
      />
      <path
        d="M13.6 12.16c0-1.43-.83-2.28-2.52-2.7l-.58-.13V6.27A1.62 1.62 0 0 1 12 7.75h1.43A2.9 2.9 0 0 0 10.5 5V4a.5.5 0 0 0-1 0v1c-1.85.18-3 1.21-3 2.77a2.69 2.69 0 0 0 2.4 2.64l.6.15v3.24a1.76 1.76 0 0 1-1.75-1.54H6.3c0 1.58 1.26 2.64 3.2 2.77v1a.5.5 0 0 0 1 0V15c1.97-.16 3.1-1.2 3.1-2.84zM8 7.68a1.47 1.47 0 0 1 1.5-1.42v2.85C8.52 8.91 8 8.42 8 7.68zm2.51 6.13v-3.05c1.13.25 1.65.73 1.65 1.53s-.61 1.44-1.66 1.52z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
