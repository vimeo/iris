import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Dropbox = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M10 5.2L5 8.39l5 3.2-5 3.19-5-3.22 5-3.2L0 5.2 5 2zM5 15.79l5-3.19 5 3.19L10 19zm5-4.23l5-3.2-5-3.16L15 2l5 3.2-5 3.19 5 3.2-5 3.19z"
        fill="#0061ff"
      />
    </svg>
  )
);
