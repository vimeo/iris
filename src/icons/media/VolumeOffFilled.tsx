import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const VolumeOffFilled: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.58579 8.00001H4C2.89543 8.00001 2 8.89544 2 10V14C2 15.1046 2.89543 16 4 16H5.58579L10.2929 20.7071C10.9229 21.3371 12 20.8909 12 20V4.00001C12 3.1091 10.9229 2.66293 10.2929 3.2929L5.58579 8.00001ZM14.7071 8.2929C14.3166 7.90237 13.6834 7.90237 13.2929 8.2929C12.9024 8.68342 12.9024 9.31659 13.2929 9.70711L16.1213 12.5355L13.2929 15.364C12.9024 15.7545 12.9024 16.3877 13.2929 16.7782C13.6834 17.1687 14.3166 17.1687 14.7071 16.7782L17.5355 13.9498L20.364 16.7782C20.7545 17.1687 21.3876 17.1687 21.7782 16.7782C22.1687 16.3877 22.1687 15.7545 21.7782 15.364L18.9497 12.5355L21.7782 9.70711C22.1687 9.31659 22.1687 8.68342 21.7782 8.2929C21.3876 7.90237 20.7545 7.90237 20.364 8.2929L17.5355 11.1213L14.7071 8.2929Z"
      />
    </svg>
  )
);

VolumeOffFilled.tags = [
  'control',
  'editor',
  'media',
  'mute',
  'off',
  'player',
  'sound',
  'volume',
];
