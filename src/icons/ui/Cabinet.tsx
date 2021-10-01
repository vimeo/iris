import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const Cabinet: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 5H5V11H19V5ZM5 19V13H19V19H5ZM5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM11 7C10.4477 7 10 7.44772 10 8C10 8.55228 10.4477 9 11 9H13C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7H11Z"
      />
    </svg>
  )
);

Cabinet.tags = [
  'data',
  'files',
  'folders',
  'group',
  'manage',
  'office',
  'organization',
  'settings',
  'team',
];
