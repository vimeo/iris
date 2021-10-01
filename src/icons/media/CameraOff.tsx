import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const CameraOff: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6644 4.7474C22.0772 4.38049 22.1143 3.74841 21.7474 3.33563C21.3805 2.92285 20.7484 2.88567 20.3356 3.25259L2.33565 19.2526C1.92286 19.6195 1.88568 20.2516 2.2526 20.6644C2.61952 21.0771 3.25159 21.1143 3.66437 20.7474L21.6644 4.7474ZM15.0351 5.28833C14.7331 5.10534 14.3789 5 14 5H4C2.89543 5 2 5.89543 2 7V16.8751L4 15.0973V7H13.1094L15.0351 5.28833ZM8.64063 19L10.8906 17H14V14.2361L16.2622 12.2253L19.935 16H19.999V8.90368L22 7.125V17C22 17.5523 21.5523 18 21 18H19.5132C19.2432 18 18.9847 17.8908 18.7964 17.6973L16 14.823V17C16 18.1046 15.1046 19 14 19H8.64063Z"
      />
    </svg>
  )
);

CameraOff.tags = [
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
