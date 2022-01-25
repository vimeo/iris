import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const LiveElement: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8ZM9.87398 7C9.42994 8.72523 7.86384 10 6 10C3.79086 10 2 8.20914 2 6C2 3.79086 3.79086 2 6 2C7.86384 2 9.42994 3.27477 9.87398 5H13.1716C15.8443 5 17.1828 8.23143 15.2929 10.1213L10.1213 15.2929C9.49136 15.9229 9.93753 17 10.8284 17H14.126C14.5701 15.2748 16.1362 14 18 14C20.2091 14 22 15.7909 22 18C22 20.2091 20.2091 22 18 22C16.1362 22 14.5701 20.7252 14.126 19H10.8284C8.15571 19 6.81722 15.7686 8.70711 13.8787L13.8787 8.70711C14.5086 8.07714 14.0625 7 13.1716 7H9.87398ZM16 18.0023C16.0012 19.1058 16.8962 20 18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 18.0008 16 18.0015 16 18.0023Z"
      />
    </svg>
  )
);

LiveElement.tags = [
  'arrow',
  'connect',
  'control',
  'editor',
  'interact',
  'interactive',
  'live',
  'media',
  'placement',
  'position',
  'wirewax',
];
