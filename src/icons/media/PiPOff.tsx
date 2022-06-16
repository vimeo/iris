import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const PiPOff: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.6666 16.0001H53.3333V32.0001H58.6666V38.3295C58.6645 37.779 58.2176 37.3334 57.6666 37.3334H32.9999C32.4476 37.3334 31.9999 37.7811 31.9999 38.3334V57.6667C31.9999 58.219 32.4476 58.6667 32.9999 58.6667H57.6666C58.2189 58.6667 58.6666 58.219 58.6666 57.6667V42.6667V38.3334V16.0001C58.6666 13.0546 56.2788 10.6667 53.3333 10.6667H10.6666C7.72107 10.6667 5.33325 13.0546 5.33325 16.0001V42.6667C5.33325 45.6123 7.72107 48.0001 10.6666 48.0001H26.6666V42.6667H10.6666V16.0001ZM20.3333 31.3334V28.1627L25.9199 33.7494C26.2799 34.1094 26.7812 34.3334 27.3333 34.3334C28.4373 34.3334 29.3333 33.4401 29.3333 32.3334C29.3333 31.7814 29.1092 31.2827 28.7466 30.9201L23.1626 25.3334H26.3333C27.4373 25.3334 28.3333 24.4401 28.3333 23.3334C28.3333 22.2294 27.4373 21.3334 26.3333 21.3334H18.3333C17.2293 21.3334 16.3333 22.2294 16.3333 23.3334V31.3334C16.3333 32.4401 17.2293 33.3334 18.3333 33.3334C19.4373 33.3334 20.3333 32.4401 20.3333 31.3334Z"
      />
    </svg>
  )
);

PiPOff.tags = [
  'close',
  'dual',
  'end',
  'exit',
  'floating',
  'mini',
  'multi',
  'off',
  'overlay',
  'picture-in-picture',
  'picture',
  'PIP',
  'popover',
  'video',
];
