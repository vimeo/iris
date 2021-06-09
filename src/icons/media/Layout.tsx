import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const Layout: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 3C22 2.44772 21.5523 2 21 2H13H11H3C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H11H13H21C21.5523 22 22 21.5523 22 21V13V11V3ZM20 11V4H13V11H20ZM11 13V11V4H4V20H11V13ZM13 13H20V20H13V13Z"
      />
    </svg>
  )
);

Layout.tags = [
  'collection',
  'collections',
  'editor',
  'grid',
  'layout',
  'line',
  'shape',
];
