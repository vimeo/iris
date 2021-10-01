import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const ScreenShare: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 16V5H20V16H4ZM2 4.674C2 3.74947 2.74948 3 3.674 3H20.326C21.2505 3 22 3.74948 22 4.674V16.326C22 17.2505 21.2505 18 20.326 18H3.674C2.74948 18 2 17.2505 2 16.326V4.674ZM18 19.9C18 19.4029 17.5971 19 17.1 19H6.9C6.40294 19 6 19.4029 6 19.9V20.1C6 20.5971 6.40294 21 6.9 21H17.1C17.5971 21 18 20.5971 18 20.1V19.9Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2929 6.29289C11.6834 5.90237 12.3166 5.90237 12.7071 6.29289L16.4142 10L15 11.4142L13 9.41421V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V9.41421L9.00003 11.4142L7.58582 10L11.2929 6.29289Z"
      />
    </svg>
  )
);

ScreenShare.tags = [
  'call',
  'camera',
  'control',
  'data',
  'device',
  'display',
  'live',
  'media',
  'screenshare',
  'share',
  'toggle',
  'user',
  'video',
  'viewer',
];
