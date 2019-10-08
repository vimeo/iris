import React, { forwardRef, Ref } from 'react';
import { IrisSVGProps } from '../../utils';
export const SocialChipFacebook = forwardRef(
  (props: IrisSVGProps, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <g fill="none" fillRule="evenodd">
        <rect fill="#3B5998" width={24} height={24} rx={3} />
        <path
          d="M16.565 24.013v-9.294h3.12l.467-3.622h-3.587V8.784c0-1.049.291-1.763 1.795-1.763l1.918-.001V3.78c-.332-.044-1.47-.142-2.795-.142-2.765 0-4.658 1.688-4.658 4.788v2.67H9.697v3.623h3.128v9.294h3.74z"
          fill="#FFF"
        />
        <rect
          strokeOpacity={0.33}
          stroke="#000"
          opacity={0.25}
          x={0.5}
          y={0.5}
          width={23}
          height={23}
          rx={3}
        />
      </g>
    </svg>
  ),
);
