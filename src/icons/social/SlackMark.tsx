import React, { forwardRef, Ref } from 'react';
import { IrisSVGProps } from '../../utils';
export const SlackMark = forwardRef(
  (props: IrisSVGProps, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M4.2 12.64a2.1 2.1 0 1 1-2.1-2.1h2.1zM5.26 12.64a2.1 2.1 0 1 1 4.2 0v5.26a2.1 2.1 0 0 1-4.2 0z"
        fill="#e01e5a"
      />
      <path
        d="M7.36 4.2a2.1 2.1 0 1 1 2.1-2.1v2.1zM7.36 5.26a2.1 2.1 0 0 1 0 4.2H2.1a2.1 2.1 0 0 1 0-4.2z"
        fill="#36c5f0"
      />
      <path
        d="M15.8 7.36a2.1 2.1 0 1 1 2.1 2.1h-2.1zM14.74 7.36a2.1 2.1 0 1 1-4.2 0V2.1a2.1 2.1 0 1 1 4.2 0z"
        fill="#2eb67d"
      />
      <path
        d="M12.64 15.8a2.1 2.1 0 1 1-2.1 2.1v-2.1zM12.64 14.74a2.1 2.1 0 0 1 0-4.2h5.26a2.1 2.1 0 0 1 0 4.2z"
        fill="#ecb22e"
      />
    </svg>
  ),
);
