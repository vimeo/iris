import React, { SVGProps } from 'react';
export const HamburgerMenu = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" {...props}>
        <path
            d="M2 3h16a1 1 0 0 1 1 1 1 1 0 0 1-1 1H2a1 1 0 0 1-1-1 1 1 0 0 1 1-1zm0 6h16a1 1 0 0 1 1 1 1 1 0 0 1-1 1H2a1 1 0 0 1-1-1 1 1 0 0 1 1-1zm0 6h16a1 1 0 0 1 1 1 1 1 0 0 1-1 1H2a1 1 0 0 1-1-1 1 1 0 0 1 1-1z"
            fill="#1a2e3b"
        />
    </svg>
);
