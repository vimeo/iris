import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const PersonAdd: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        d="M12 7C12 8.65685 10.6569 10 9 10C7.34315 10 6 8.65685 6 7C6 5.34315 7.34315 4 9 4C10.6569 4 12 5.34315 12 7Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 14H7C5.34315 14 4 15.3431 4 17V19H14V17C14 15.3431 12.6569 14 11 14ZM7 12C4.23858 12 2 14.2386 2 17V21H16V17C16 14.2386 13.7614 12 11 12H7Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 7C19 6.44772 18.5523 6 18 6C17.4477 6 17 6.44772 17 7V9H15C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11H17V13C17 13.5523 17.4477 14 18 14C18.5523 14 19 13.5523 19 13V11H21C21.5523 11 22 10.5523 22 10C22 9.44772 21.5523 9 21 9H19V7Z"
      />
    </svg>
  )
);

PersonAdd.tags = [
  'add',
  'avatar',
  'group',
  'new',
  'person',
  'plus',
  'team',
  'user',
];
