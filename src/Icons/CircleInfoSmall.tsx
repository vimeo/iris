import React, { SVGProps } from 'react';
export const CircleInfoSmall = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" {...props}>
        <g fill="#1a2e3b">
            <path d="M10 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6zm0-11a5 5 0 1 0 5 5 5 5 0 0 0-5-5z" />
            <path d="M10 9a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 10 9zm0-2a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5z" />
        </g>
    </svg>
);
