import React, { forwardRef, Ref } from 'react';
import { IrisSVGProps } from '../../utils';
export const Clipboard = forwardRef(
  (props: IrisSVGProps, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M13.71 11.3l-4-4-1.42 1.41L10.58 11H2v2h8.59l-2.3 2.29L9.7 16.7l4-4a1 1 0 0 0 .01-1.4z"
        fill="#1a2e3b"
      />
      <path
        d="M16 2h-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2H4a2 2 0 0 0-2 2v5h2V4h1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2h1v14H4v-3H2v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-3 2H7V2h6z"
        fill="#1a2e3b"
      />
    </svg>
  ),
);
