import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const FastForwardFilled: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 5C3 4.44772 3.44772 4 4 4C4.55228 4 5 4.44772 5 5L5 19C5 19.5523 4.55229 20 4 20C3.44772 20 3 19.5523 3 19V5ZM20.5039 11.1362C20.8111 11.3154 21 11.6443 21 12C21 12.3557 20.8111 12.6846 20.5039 12.8638L8.50387 19.8638C8.19458 20.0442 7.81243 20.0455 7.50194 19.8671C7.19145 19.6888 7 19.3581 7 19L7 5C7 4.64194 7.19144 4.3112 7.50194 4.13286C7.81243 3.95452 8.19458 3.9558 8.50387 4.13622L20.5039 11.1362Z"
      />
    </svg>
  )
);

FastForwardFilled.tags = [
  'arrow',
  'control',
  'editor',
  'fast',
  'fastforward',
  'forward',
  'media',
  'pause',
  'play',
  'player',
];
