import React, { SVGProps } from 'react';
export const DotsMenu = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" {...props}>
        <circle cx={3} cy={10} r={2} fill="#1a2e3b" />
        <circle cx={10} cy={10} r={2} fill="#1a2e3b" />
        <circle cx={17} cy={10} r={2} fill="#1a2e3b" />
    </svg>
);
