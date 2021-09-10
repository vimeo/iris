import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const RewindFilled: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21 5C21 4.44772 20.5523 4 20 4C19.4477 4 19 4.44772 19 5L19 19C19 19.5523 19.4477 20 20 20C20.5523 20 21 19.5523 21 19V5ZM3.49613 11.1362C3.18891 11.3154 3 11.6443 3 12C3 12.3557 3.18891 12.6846 3.49613 12.8638L15.4961 19.8638C15.8054 20.0442 16.1876 20.0455 16.4981 19.8671C16.8086 19.6888 17 19.3581 17 19L17 5C17 4.64194 16.8086 4.3112 16.4981 4.13286C16.1876 3.95452 15.8054 3.9558 15.4961 4.13622L3.49613 11.1362Z"
      />
    </svg>
  )
);

RewindFilled.tags = [
  'arrow',
  'control',
  'editor',
  'media',
  'pause',
  'play',
  'player',
  'rewind',
];
