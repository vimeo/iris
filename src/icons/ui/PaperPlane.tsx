import React, { forwardRef, Ref } from 'react';
import { IrisSVGProps } from '../../utils';
export const PaperPlane = forwardRef(
  (props: IrisSVGProps, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 18.1 20.95" ref={ref} {...props}>
      <path
        d="M18.11 0L-.01 12.07l8 4v4.88l2.26-3.75 6.65 3.32zm-3 17.37l-3.93-2 1.81-6.42-5 4.91-4-2.03 11.9-7.93z"
        fill="#1a2e3b"
      />
    </svg>
  ),
);
