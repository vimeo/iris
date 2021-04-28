import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Talks = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" ref={ref} {...props}>
      <path
        id="talks_32"
        d="M18,24.06V11.245l2.986-1.675C21.603,9.843,22.282,10,23,10c2.761,0,5-2.239,5-5s-2.239-5-5-5
		c-2.739,0-4.958,2.204-4.993,4.935l-10.186,7.45l0.003,0.005C7.327,12.753,7,13.337,7,14c0,1.105,0.895,2,2,2
		c0.355,0,0.683-0.1,0.972-0.262l0.005,0.008L14,13.489V24.06C8.327,24.378,4,26.018,4,28c0,2.209,5.373,4,12,4s12-1.791,12-4
		C28,26.018,23.673,24.378,18,24.06z"
      />
    </svg>
  )
);
