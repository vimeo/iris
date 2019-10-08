import React, { forwardRef, Ref } from 'react';
import { IrisSVGProps } from '../../utils';
export const Search = forwardRef(
  (props: IrisSVGProps, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        d="M19.71 18.29l-3.11-3.11a7 7 0 1 0-1.41 1.42l3.11 3.11a1 1 0 0 0 1.41-1.42zM6 11a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"
        fill="#1a2e3b"
      />
    </svg>
  ),
);
