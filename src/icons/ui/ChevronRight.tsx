import React, { forwardRef, Ref } from 'react';
import { IrisSVGProps } from '../../utils';
export const ChevronRight = forwardRef(
  (props: IrisSVGProps, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        d="M9.71 17.71l-1.42-1.42 4.3-4.29-4.3-4.29 1.42-1.42 5 5a1 1 0 0 1 0 1.41z"
        fill="#1a2e3b"
      />
    </svg>
  ),
);
