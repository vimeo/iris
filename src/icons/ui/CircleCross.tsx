import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const CircleCross: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 13.414L9.87845 15.5355L8.46424 14.1213L10.5858 11.9998L8.46469 9.87868L9.87891 8.46447L12 10.5856L14.1211 8.46447L15.5353 9.87868L13.4142 11.9998L15.5358 14.1213L14.1215 15.5355L12 13.414Z"
      />
    </svg>
  )
);

CircleCross.tags = [
  'bad',
  'cancel',
  'circle',
  'close',
  'cross',
  'delete',
  'dismiss',
  'exit',
  'negative',
  'remove',
  'x',
];
