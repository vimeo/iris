import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Pencil = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M3.2 16.8l3.8-1 10-10c.2-.2.2-.5 0-.7L14.9 3c-.2-.2-.5-.2-.7 0l-2.1 2.1 2.8 2.8L13.8 9 11 6.2 4.2 13l-1 3.8zm9.9-14.9c.8-.8 2-.8 2.8 0L18.1 4c.8.8.8 2 0 2.8L7.8 17.2l-5.6 1.5c-.5.1-.9-.2-.7-.7l1.4-5.7L13.1 1.9z"
        fill="#1A2E3B"
      />
    </svg>
  )
);
