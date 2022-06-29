import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const CcOff: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 128 128" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.6666 34.6667C10.6666 30.2484 14.2483 26.6667 18.6666 26.6667H109.333C113.752 26.6667 117.333 30.2484 117.333 34.6667V93.3333C117.333 97.7516 113.752 101.333 109.333 101.333H18.6666C14.2483 101.333 10.6666 97.7516 10.6666 93.3333V34.6667Z"
        fill="#E3E8E9"
      />
      <rect
        x="10.6666"
        y="74.6667"
        width="106.667"
        height="10.6667"
        fill="#B3BFC8"
      />
      <path
        d="M21.3334 40.96C21.3334 38.957 22.9571 37.3333 24.96 37.3333H44.3734C46.3763 37.3333 48 38.957 48 40.96V49.7067C48 51.7096 46.3763 53.3333 44.3734 53.3333H24.96C22.9571 53.3333 21.3334 51.7096 21.3334 49.7067V40.96Z"
        fill="white"
      />
    </svg>
  )
);

CcOff.tags = [
  'buy',
  'card',
  'credit card',
  'credit',
  'debit',
  'money',
  'off',
  'payment',
  'purchase',
  'subscribe',
];
