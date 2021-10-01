import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const VolumeOn: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 12C20 15.7277 17.4505 18.8599 14 19.7479V21.7999C18.5645 20.8734 22 16.8379 22 12C22 7.16206 18.5645 3.12655 14 2.20001V4.25201C17.4505 5.1401 20 8.2723 20 12ZM18 12C18 9.38754 16.3304 7.16506 14 6.34139V8.53511C15.1956 9.22672 16 10.5194 16 12C16 13.4805 15.1956 14.7732 14 15.4648V17.6586C16.3304 16.8349 18 14.6124 18 12ZM6.58579 10.004H7.55645L8.15702 9.24139L10 6.90126V17.1067L8.15702 14.7665L7.55645 14.004H6.58579H4V10.004H6.58579ZM6.58579 8.00396L10.2929 3.29685C10.9229 2.66689 12 3.11305 12 4.00396V20.004C12 20.8949 10.9229 21.341 10.2929 20.7111L6.58579 16.004H4C2.89543 16.004 2 15.1085 2 14.004V10.004C2 8.89939 2.89543 8.00396 4 8.00396H6.58579Z"
      />
    </svg>
  )
);

VolumeOn.tags = [
  'audio',
  'control',
  'editor',
  'media',
  'mute',
  'on',
  'player',
  'sound',
  'volume',
];
