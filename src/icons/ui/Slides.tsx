import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const Slides: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path d="M11.9995 9L7.00049 9C6.44821 9 6 8.55228 6 8C6 7.44771 6.44772 7 7 7L12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5518 9 11.9995 9Z" />
      <path d="M17 12C17 12.5523 16.5523 13 16 13H7C6.44771 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H16C16.5523 11 17 11.4477 17 12Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V16C22 17.1046 21.1046 18 20 18H13.4417L15.694 20.2322C16.102 20.6366 16.102 21.2923 15.694 21.6967C15.286 22.1011 14.6244 22.1011 14.2164 21.6967L12 19.5L9.78361 21.6967C9.37559 22.1011 8.71405 22.1011 8.30602 21.6967C7.89799 21.2923 7.89799 20.6366 8.30602 20.2322L10.5583 18H4C2.89543 18 2 17.1046 2 16V4ZM4 4H20V16H4V4ZM12 18C11.9927 18 11.9864 18.0011 11.981 18.0032C11.9748 18.0056 11.9696 18.0091 11.9651 18.0136L12 18.0487L12.0349 18.0136C12.0304 18.0091 12.0252 18.0056 12.019 18.0032C12.0136 18.0011 12.0073 18 12 18Z"
      />
    </svg>
  )
);

Slides.tags = [
  'audience',
  'control',
  'display',
  'editor',
  'keynote',
  'live',
  'media',
  'overlay',
  'present',
  'presentation',
  'screenshare',
  'slides',
  'source',
  'team',
];
