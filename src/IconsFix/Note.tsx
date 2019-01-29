import React, { SVGProps } from 'react';
export const Note = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" {...props}>
        <path
            d="M15 20H5a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3zM5 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"
            fill="#1a2e3b"
        />
        <path fill="#1a2e3b" d="M6 5h8v2H6zm0 4h8v2H6zm0 4h5v2H6z" />
    </svg>
);
