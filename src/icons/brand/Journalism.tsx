import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Journalism = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" ref={ref} {...props}>
      <g id="reporting_and_journalism_32">
        <path
          d="M25,31H7c-3.859,0-7-3.14-7-7V5c0-2.206,1.794-4,4-4h18c1.478,0,2.771,0.805,3.463,2H28c2.206,0,4,1.794,4,4v17
			C32,27.86,28.859,31,25,31z M4,5v19c0,1.654,1.346,3,3,3h18c1.654,0,3-1.346,3-3V7h-2v16c0,1.104-0.896,2-2,2s-2-0.896-2-2V5H4z"
        />
        <path d="M11,13H7c-0.552,0-1-0.448-1-1V8c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1v4C12,12.552,11.552,13,11,13z" />
        <g>
          <path d="M15,9h4c0.552,0,1-0.448,1-1s-0.448-1-1-1h-4c-0.552,0-1,0.448-1,1S14.448,9,15,9z" />
          <path d="M19,11h-4c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1h4c0.552,0,1-0.448,1-1C20,11.448,19.552,11,19,11z" />
          <path d="M19,15H7c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1h12c0.552,0,1-0.448,1-1C20,15.448,19.552,15,19,15z" />
          <path d="M19,19H7c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1h12c0.552,0,1-0.448,1-1C20,19.448,19.552,19,19,19z" />
          <path d="M19,23H7c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1h12c0.552,0,1-0.448,1-1C20,23.448,19.552,23,19,23z" />
        </g>
      </g>
    </svg>
  )
);
