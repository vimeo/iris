import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const Cast: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" ref={ref} {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M53.3333 16.0001H10.6666V21.3334H5.33325V16.0001C5.33325 13.0546 7.72107 10.6667 10.6666 10.6667H53.3333C56.2788 10.6667 58.6666 13.0546 58.6666 16.0001V48.0001C58.6666 50.9456 56.2788 53.3334 53.3333 53.3334H37.3333V48.0001H45.3333H53.3333V16.0001ZM21.3333 53.3334C21.3333 44.4969 14.1698 37.3334 5.33325 37.3334V42.6667C11.2243 42.6667 15.9999 47.4424 15.9999 53.3334H21.3333ZM5.33325 48.0001C8.27877 48.0001 10.6666 50.3879 10.6666 53.3334H5.33325V48.0001ZM31.9999 53.3334H26.6666C26.6666 41.5513 17.1153 32.0001 5.33325 32.0001V26.6667C20.0608 26.6667 31.9999 38.6058 31.9999 53.3334Z"
      />
    </svg>
  )
);

Cast.tags = [
  'airplay',
  'cast',
  'control',
  'device',
  'display',
  'format',
  'media',
  'network',
  'play',
  'player',
  'screen',
  'screenshare',
  'share',
  'toggle',
  'video',
  'viewer',
];
