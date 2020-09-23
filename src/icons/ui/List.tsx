import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const List = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg x={0} y={0} viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        id="List_svg__Rectangle-16"
        className="List_svg__st0"
        d="M4 5h16c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1-.4-1-1s.4-1 1-1z"
      />
      <path
        className="List_svg__st0"
        d="M4 11h10c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1-.4-1-1s.4-1 1-1zM4 17h7c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1-.4-1-1s.4-1 1-1z"
      />
    </svg>
  )
);
