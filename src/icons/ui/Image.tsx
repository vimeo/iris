import React, { forwardRef, Ref } from 'react';
import { IrisSVGProps } from '../../utils';
export const Image = forwardRef(
  (props: IrisSVGProps, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path d="M17 0H3a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zM3 2h14a1 1 0 0 1 1 1v9.62l-2.38-2.33a1 1 0 0 0-1.4 0l-2.28 2.29-5.26-5.29a1 1 0 0 0-1.42 0L2 10.58V3a1 1 0 0 1 1-1zm14 16H3a1 1 0 0 1-1-1v-3.59l4-4 5.26 5.29a1 1 0 0 0 1.42 0l2.28-2.3 3.07 3V17A1 1 0 0 1 17 18z" />
      <circle cx={12} cy={6.5} r={1.5} />
    </svg>
  ),
);
