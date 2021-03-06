import React, { SVGProps } from 'react';
export const VodThumbnailBadge = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <g fill="none" fillRule="evenodd">
      <rect
        fill="#000"
        opacity={0.698}
        width={24}
        height={24}
        rx={3}
      />
      <path
        d="M15.407 11.952l-9.977 5.4 5.335 3.117c.571.335 1.507.335 2.079.001l5.725-3.347c.572-.334 1.04-1.156 1.04-1.825v-1.053l-4.202-2.293z"
        fill="#1FA9E0"
      />
      <path
        d="M18.57 6.779l-5.697-3.344c-.57-.335-1.507-.337-2.08-.003l-1.511.88V8.61l10.327 5.635v-5.64c0-.669-.468-1.49-1.038-1.826"
        fill="#257FC0"
      />
      <path
        d="M5.04 6.782C4.469 7.116 4 7.936 4 8.605v6.693c0 .669.468 1.49 1.04 1.825l.39.228 3.852-2.084V4.31L5.04 6.782z"
        fill="#3AC4F1"
      />
    </g>
  </svg>
);
