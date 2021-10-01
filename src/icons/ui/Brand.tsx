import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const Brand: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5934 1.60272C11.8846 1.45947 12.2271 1.4664 12.5123 1.62131L21.4774 6.49216C21.7995 6.66714 22 7.00431 22 7.37085V16.7535C22 17.1245 21.7946 17.4649 21.4665 17.638L12.4665 22.3845C12.1746 22.5385 11.8254 22.5385 11.5335 22.3845L2.53351 17.638C2.20537 17.4649 2 17.1245 2 16.7535V6.9451C2 6.56401 2.2166 6.21605 2.55854 6.04782L11.5934 1.60272ZM4 7.56758V16.1503L12 20.3695L20 16.1503V7.9656L12.0121 3.62569L4 7.56758ZM8 8H12V10H11V14H14V12.5H16V14V14.5V16H8V14H9V10H8V8Z"
      />
    </svg>
  )
);

Brand.tags = [
  'brand',
  'company',
  'custom',
  'customization',
  'customize',
  'edit',
  'logo',
  'logomark',
  'watermark',
];
