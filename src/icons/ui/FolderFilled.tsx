import React, { forwardRef, Ref } from 'react';
import { IrisSVGProps } from '../../utils';
export const FolderFilled = forwardRef(
  (props: IrisSVGProps, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 18" ref={ref} {...props}>
      <path
        d="M20 5a2 2 0 0 0-2-2h-6.67L10 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5z"
        fill="#1a2e3b"
      />
    </svg>
  ),
);
