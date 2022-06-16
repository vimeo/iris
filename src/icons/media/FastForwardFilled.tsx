import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const FastForwardFilled: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" ref={ref} {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.4506 12.0055L32.4643 30.0179C33.6413 31.0772 33.6413 32.9228 32.4643 33.9821L12.4506 51.9945C10.7345 53.5389 8 52.3211 8 50.0124V13.9876C8 11.6789 10.7345 10.4611 12.4506 12.0055ZM39.1172 12.0055L59.131 30.0179C60.308 31.0772 60.308 32.9228 59.131 33.9821L39.1172 51.9945C37.4012 53.5389 34.6667 52.3211 34.6667 50.0124V13.9876C34.6667 11.6789 37.4012 10.4611 39.1172 12.0055Z"
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
  'frame',
  'media',
  'next',
  'pause',
  'play',
  'player',
];
