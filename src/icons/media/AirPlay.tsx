import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const AirPlay: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" ref={ref} {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M53.3333 16H10.6666V42.6666H17.4025L13.0916 48H10.6666C7.72107 48 5.33325 45.6121 5.33325 42.6666V16C5.33325 13.0544 7.72107 10.6666 10.6666 10.6666H53.3333C56.2788 10.6666 58.6666 13.0544 58.6666 16V42.6666C58.6666 45.6121 56.2788 48 53.3333 48H50.9082L46.5973 42.6666H53.3333V16ZM32.7776 38.2955C32.3774 37.8003 31.6225 37.8003 31.2222 38.2955L17.1505 55.7047C16.6219 56.3586 17.0874 57.3333 17.9282 57.3333H46.0716C46.9125 57.3333 47.3779 56.3586 46.8493 55.7047L32.7776 38.2955Z"
      />
    </svg>
  )
);

AirPlay.tags = [
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
