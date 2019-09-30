import React, { SVGProps } from 'react';
export const Drive = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" {...props}>
    <defs>
      <radialGradient
        id="drive_svg__a"
        cx={-181.3}
        cy={100.59}
        r={1.98}
        gradientTransform="matrix(6.03 0 0 -6.03 1124.65 619.63)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#4387fd" />
        <stop offset={0.65} stopColor="#3078f0" />
        <stop offset={0.91} stopColor="#2b72ea" />
        <stop offset={1} stopColor="#286ee6" />
      </radialGradient>
      <radialGradient
        id="drive_svg__b"
        cx={-197.93}
        cy={106.77}
        r={1.06}
        gradientTransform="matrix(11.29 0 0 -11.29 2267.18 1219.22)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ffd24d" />
        <stop offset={1} stopColor="#f6c338" />
      </radialGradient>
    </defs>
    <path
      fill="#0da960"
      d="M3.48 18.32L0 12.29 6.52 1 10 7.03 3.48 18.32z"
    />
    <path
      fill="url(#drive_svg__a)"
      d="M3.48 18.32l3.48-6.03H20l-3.48 6.03H3.48z"
    />
    <path
      fill="url(#drive_svg__b)"
      d="M20 12.29h-6.96L6.52 1h6.96L20 12.29z"
    />
    <path
      fill="#2d6fdd"
      d="M10 12.29H6.96l1.51-2.63-4.99 8.66L10 12.29z"
    />
    <path fill="#e5b93c" d="M13.04 12.29H20l-8.47-2.63 1.51 2.63z" />
    <path fill="#0c9b57" d="M8.47 9.66L10 7.03 6.52 1l1.95 8.66z" />
  </svg>
);
