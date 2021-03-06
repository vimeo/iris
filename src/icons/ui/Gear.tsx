import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Gear = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 18.86 20" ref={ref} {...props}>
      <path
        d="M10.43 20h-2a2 2 0 0 1-2-2v-1.67a7 7 0 0 1-1-.57l-1.46.84a2 2 0 0 1-2.72-.73l-1-1.74a2 2 0 0 1 .73-2.73l1.45-.84V9.44L.97 8.6a2 2 0 0 1-.73-2.73l1-1.74a2 2 0 0 1 2.75-.73l1.44.84a7 7 0 0 1 1-.57V2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.67a7.11 7.11 0 0 1 1 .56l1.46-.84a2 2 0 0 1 2.72.74l1 1.74a2 2 0 0 1-.72 2.73l-1.46.84v1.12l1.46.84a2 2 0 0 1 .72 2.73l-1 1.74a2 2 0 0 1-2.72.73l-1.46-.84a7 7 0 0 1-1 .57V18a2 2 0 0 1-2 2zm-4.88-6.6l1 .72a5 5 0 0 0 .7.4l1.14.54V18h2v-2.94l1.14-.54a5.14 5.14 0 0 0 .7-.4l1-.72 2.56 1.47 1-1.74-2.54-1.47.1-1.26v-.82l-.1-1.26 2.55-1.47-1-1.73-2.49 1.48-1-.72a5.06 5.06 0 0 0-.7-.4l-1.18-.54V2h-2v2.94l-1.14.54a5 5 0 0 0-.7.4l-1 .72-2.6-1.47-1 1.74 2.55 1.47-.11 1.25v.82l.1 1.26-2.54 1.47 1 1.73z"
        fill="#1a2e3b"
      />
      <path
        d="M9.43 13a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
