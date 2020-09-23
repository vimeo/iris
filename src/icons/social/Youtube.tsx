import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Youtube = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M19.58 5.15a2.51 2.51 0 0 0-1.77-1.73C16.25 3 10 3 10 3s-6.25 0-7.81.42A2.51 2.51 0 0 0 .42 5.2 26.36 26.36 0 0 0 0 10a26.36 26.36 0 0 0 .42 4.85 2.51 2.51 0 0 0 1.77 1.78C3.75 17 10 17 10 17s6.25 0 7.81-.42a2.51 2.51 0 0 0 1.77-1.78A26.36 26.36 0 0 0 20 10a26.36 26.36 0 0 0-.42-4.85zM8 13V7l5.22 3z"
        fill="#d9252a"
      />
    </svg>
  )
);
