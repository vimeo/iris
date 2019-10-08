import React, { forwardRef, Ref } from 'react';
import { IrisSVGProps } from '../../utils';
export const Replay = forwardRef(
  (props: IrisSVGProps, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M15.42 10.24A6 6 0 1 1 12.49 5H10v2h5a1 1 0 0 0 1-1V1h-2v2.58a8 8 0 1 0 3.43 6.66z"
        fill="#1a2e3b"
      />
    </svg>
  ),
);
