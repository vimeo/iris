import React, { forwardRef, Ref } from 'react';
import { IrisSVGProps } from '../../utils';
export const ArrowRight = forwardRef(
  (props: IrisSVGProps, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M14.846 10.937l-4.376 4.377 1.06 1.06 5.657-5.656a.75.75 0 0 0 0-1.061L11.53 4l-1.06 1.06 4.376 4.377H2v1.5h12.846z"
        fill="#1A2E3B"
      />
    </svg>
  ),
);
