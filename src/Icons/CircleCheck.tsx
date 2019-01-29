import React, { SVGProps } from 'react';
export const CircleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg data-name="Layer 1" viewBox="0 0 20 20" {...props}>
    <path
      d="M10 20a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8z"
      fill="#1a2e3b"
    />
    <path
      d="M9 14a1 1 0 0 1-.71-.29l-3-3 1.42-1.42L9 11.59l5.29-5.3 1.42 1.42-6 6A1 1 0 0 1 9 14z"
      fill="#1a2e3b"
    />
  </svg>
);
