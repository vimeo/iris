import React, { SVGProps } from 'react';

const ClockIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g id="Icon/Dark/Theme">
                <rect
                    id="Rectangle"
                    opacity="0.01"
                    width="24"
                    height="24"
                    fill="white"
                />
                <g id="photo_filter-24px">
                    <path
                        id="Shape"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.7778 9.77778V19.7778H4.2V4.22222H14.2V2H4.22222C3 2 2 3 2 4.22222V19.7778C2 21 3 22 4.22222 22H19.7778C21 22 22 21 22 19.7778V9.77778H19.7778ZM18.06 5.94L19 8L19.94 5.94L22 5L19.94 4.06L19 2L18.06 4.06L16 5L18.06 5.94ZM10.4375 10.4375L12 7L13.5625 10.4375L17 12L13.5625 13.5625L12 17L10.4375 13.5625L7 12L10.4375 10.4375Z"
                        fill="#1A2E3B"
                    />
                </g>
            </g>
        </svg>
    );
};

export default ClockIcon;
