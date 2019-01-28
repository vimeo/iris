import React, { SVGProps } from 'react';
export const Video = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" {...props}>
        <g fill="#3A5161" fillRule="evenodd">
            <path
                d="M1.25 4.006v11.988c0 .42.333.756.74.756h16.02c.402 0 .74-.34.74-.756V4.006a.748.748 0 0 0-.74-.756H1.99c-.402 0-.74.34-.74.756zm-1.25 0C0 2.898.898 2 1.99 2h16.02C19.108 2 20 2.897 20 4.006v11.988A2.003 2.003 0 0 1 18.01 18H1.99A1.998 1.998 0 0 1 0 15.994V4.006z"
                fillRule="nonzero"
            />
            <path d="M7 6.895v6.21a.5.5 0 0 0 .762.426l5.046-3.105a.5.5 0 0 0 0-.852L7.762 6.47A.5.5 0 0 0 7 6.895z" />
        </g>
    </svg>
);
