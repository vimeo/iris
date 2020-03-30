import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const EditPlayer = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 26" ref={ref} {...props}>
      <title>EditPlayer</title>
      {/* Player */}
      <g transform="translate(0.000000, 4.000000)">
        <polygon
          stroke="#1A2E3B"
          stroke-width="1.67"
          points="0 14 22 14 22 0 0 0"
        />
        <line
          x1="18.9"
          y1="10.9803922"
          x2="5.6"
          y2="10.9803922"
          stroke="#1A2E3B"
          stroke-width="1.67"
        />
        <polygon
          fill="#1A2E3B"
          stroke="#1A2E3B"
          points="4.2 10.9803922 2.1 9.75676471 2.1 12.1340196"
        />
      </g>
      {/* Pencil */}
      <g
        transform="translate(12.000000, 0.000000)"
        stroke="#1A2E3B"
        stroke-width="1.5"
      >
        <g transform="translate(6.147638, 6.641313) rotate(45.000000) translate(-6.147638, -6.641313) translate(4.147638, 0.641313)">
          <path
            d="M1.33333333,0 L2.0952381,0 C2.83161776,-1.3527075e-16 3.42857143,0.596953667 3.42857143,1.33333333 L3.42857143,9.58974359 L3.42857143,9.58974359 L1.71428571,11.8461538 L0,9.58974359 L0,1.33333333 C-9.01805001e-17,0.596953667 0.596953667,-5.30863065e-16 1.33333333,0 Z"
            stroke-linejoin="round"
          />
          <line
            x1="0.285714286"
            y1="3.38461538"
            x2="2.57142857"
            y2="3.38461538"
            stroke-linecap="square"
          />
        </g>
      </g>
    </svg>
  ),
);
