import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Tiktok = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M17.8 5.2c-1.8 0-3.5-1.2-4-3.1-.1-.4-.2-.8-.1-1.2h-3.2v12.3c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5c.2 0 .5 0 .7.1V7.7c-.7-.1-1.4 0-2.2.2-3 .8-4.8 3.9-4 6.9.8 3 3.9 4.8 6.9 4 2.5-.7 4.2-3 4.2-5.5V7.1c1.2.8 2.7 1.3 4.2 1.3V5.2z"
        fill="#3b5162"
      />
    </svg>
  ),
);
