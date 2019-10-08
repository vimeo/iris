import React, { forwardRef, Ref } from 'react';
import { IrisSVGProps } from '../../utils';
export const Television = forwardRef(
  (props: IrisSVGProps, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M17.33 1H2.67A2.68 2.68 0 0 0 0 3.67v8.66A2.68 2.68 0 0 0 2.67 15H9v2H6a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-2h6.33A2.68 2.68 0 0 0 20 12.33V3.67A2.68 2.68 0 0 0 17.33 1zM18 12.33a.67.67 0 0 1-.67.67H2.67a.67.67 0 0 1-.67-.67V3.67A.67.67 0 0 1 2.67 3h14.66a.67.67 0 0 1 .67.67z"
        fill="#1a2e3b"
      />
      <path
        d="M8 11.5a1 1 0 0 1-.53-.15A1 1 0 0 1 7 10.5v-5a1 1 0 0 1 1.45-.89l5 2.5a1 1 0 0 1 0 1.78l-5 2.5a1 1 0 0 1-.45.11zm1-4.38v1.76L10.76 8z"
        fill="#1a2e3b"
      />
    </svg>
  ),
);
