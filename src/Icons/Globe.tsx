import React, { SVGProps } from 'react';
export const Globe = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" {...props}>
        <path
            d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zM2 10a8 8 0 0 1 3-6.25v7.53a3.35 3.35 0 0 0 1.06 2.27l2 1.64a1.38 1.38 0 0 0 0 .21v2.36A8 8 0 0 1 2 10zm14 5.28A1.39 1.39 0 0 0 14.61 14H13v-.62A1.38 1.38 0 0 0 11.62 12H9V9h1.62A1.39 1.39 0 0 0 12 7.6V6h.57A1.4 1.4 0 0 0 14 4.61V3.08a8 8 0 0 1 2 12.21z"
            fill="#1a2e3b"
        />
    </svg>
);
