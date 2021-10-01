import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const CameraOffFilled: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6644 4.7474C22.0772 4.38049 22.1143 3.74841 21.7474 3.33563C21.3805 2.92285 20.7484 2.88567 20.3356 3.25259L2.33565 19.2526C1.92286 19.6195 1.88568 20.2516 2.2526 20.6644C2.61952 21.0771 3.25159 21.1143 3.66437 20.7474L21.6644 4.7474ZM14 5C14.3789 5 14.7331 5.10534 15.0351 5.28833L2 16.8751V7C2 5.89543 2.89543 5 4 5H14ZM22 7.12501L8.64063 19H14C15.1046 19 16 18.1046 16 17V14.8224L18.7964 17.6973C18.9847 17.8908 19.2432 18 19.5132 18H21C21.5523 18 22 17.5523 22 17V7.12501Z"
      />
    </svg>
  )
);

CameraOffFilled.tags = [
  'call',
  'camera',
  'control',
  'device',
  'live',
  'media',
  'off',
  'share',
  'user',
  'video',
  'viewer',
];
