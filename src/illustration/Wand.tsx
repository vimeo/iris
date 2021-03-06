import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Wand = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 44 47" ref={ref} {...props}>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(-1078 -407)">
          <g transform="translate(1042 381)">
            <g transform="translate(36 26)">
              <polygon points="7.6667 46 41 11.833 34.333 5 1 39.167" />
              <line x1="31" x2="36" y1="11" y2="16" fill="#FFFFFF" />
              <polygon
                points="7.0219 34.471 12.373 40.029 8.4815 43.755 3.0936 38.518"
                fill="#FFFFFF"
              />
              <polygon
                points="36.022 6.4708 41.373 12.029 37.482 15.755 32.094 10.518"
                fill="#FFFFFF"
              />
              <path
                d="m0 38.403 8.5968 8.5968 35.403-35.403-8.5968-8.5968-35.403 35.403zm32.607-28.817 2.7959-2.7946 4.8064 4.805-2.7959 2.7959-4.8064-4.8064zm-24.126 24.126 22.231-22.229 4.8064 4.805-22.231 22.231-4.8064-4.8064zm-4.6911 4.6911 2.7959-2.7946 4.8064 4.805-2.7959 2.7972-4.8064-4.8077z"
                fill="#23313b"
              />
              <polygon
                points="35.501 28 36.875 32.124 41 33.5 36.875 34.876 35.501 39 34.125 34.876 30 33.5 34.125 32.124"
                fill="#23313b"
              />
              <polygon
                points="19.501 0 18.126 4.1248 14 5.4993 18.126 6.8738 19.501 11 20.874 6.8738 25 5.4993 20.874 4.1248 19.502 0"
                fill="#23313b"
              />
              <path
                d="m8 12.002 1.993 0.56904c0.39749 0.11118 0.7099 0.38255 0.8424 0.72206l0.66388 1.7071 0.66527-1.7071c0.1311-0.33951 0.44491-0.61088 0.841-0.72206l1.9944-0.56904-1.9944-0.57262c-0.39609-0.11118-0.7099-0.38016-0.841-0.72206l-0.66527-1.7071-0.66388 1.7071c-0.1325 0.3419-0.44491 0.61088-0.8424 0.72206l-1.993 0.57262z"
                fill="#23313b"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
);
