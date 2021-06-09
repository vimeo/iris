import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const Duplicate: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path d="M16 2C17.1046 2 18 2.89543 18 4V16C18 17.1046 17.1046 18 16 18H4C2.89543 18 2 17.1046 2 16V4C2 2.89543 2.89543 2 4 2H16ZM16 4H4V16H16V4ZM22 18C22 20.209 20.209 22 18 22H7C5.895 22 5 21.105 5 20H18C19.105 20 20 19.105 20 18V5C21.105 5 22 5.895 22 7V18ZM9 6H11V9H14V11H11V14H9V11H6V9H9V6Z" />{' '}
    </svg>
  )
);

Duplicate.tags = [
  'add',
  'copy',
  'editor',
  'media',
  'more',
  'plus',
  'stack',
];
