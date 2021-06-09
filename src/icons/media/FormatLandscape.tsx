import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const FormatLandscape: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path d="M21.4053 6.8108V16.5405C21.4053 17.0779 20.9696 17.5135 20.4323 17.5135H2.91877C2.38142 17.5135 1.9458 17.0779 1.9458 16.5405V6.8108C1.9458 6.27344 2.38142 5.83783 2.91877 5.83783H20.4323C20.9696 5.83783 21.4053 6.27344 21.4053 6.8108ZM19.4593 7.78378H3.89175V15.5676H19.4593V7.78378Z" />
    </svg>
  )
);

FormatLandscape.tags = [
  'aspect',
  'aspectratio',
  'format',
  'landscape',
  'ratio',
  'screen',
  'shape',
  'size',
  'video',
];
