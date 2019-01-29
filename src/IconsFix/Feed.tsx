import React, { SVGProps } from 'react';
export const Feed = (props: SVGProps<SVGSVGElement>) => (
    <svg data-name="Layer 1" viewBox="0 0 20 20" {...props}>
        <path
            d="M17 0H3a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zM2 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7H2zm16 14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5h16z"
            fill="#1a2e3b"
        />
        <path fill="#1a2e3b" d="M8 14h9v2H8z" />
        <circle cx={5} cy={15} r={2} fill="#1a2e3b" />
    </svg>
);
