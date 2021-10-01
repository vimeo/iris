import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const DropPin: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 9.35C17 9.70944 16.8802 10.3234 16.5602 11.2031C16.2519 12.0507 15.8075 13.0129 15.2798 14.0234C14.261 15.9742 12.9986 17.9786 12 19.4813C11.0014 17.9786 9.73902 15.9742 8.72022 14.0234C8.19248 13.0129 7.74806 12.0507 7.43976 11.2031C7.1198 10.3234 7 9.70944 7 9.35C7 6.3022 9.32941 4 12 4C14.6706 4 17 6.3022 17 9.35ZM19 9.35C19 12.1704 15.6208 17.661 13.5581 20.7498C12.8056 21.8767 11.1944 21.8767 10.4419 20.7498C8.37917 17.661 5 12.1704 5 9.35C5 5.29071 8.13401 2 12 2C15.866 2 19 5.29071 19 9.35ZM12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
      />
    </svg>
  )
);

DropPin.tags = [
  'comment',
  'drop',
  'editor',
  'map',
  'media',
  'note',
  'pin',
  'point',
  'pushpin',
  'tag',
];
