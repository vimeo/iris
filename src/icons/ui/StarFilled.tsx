import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const StarFilled = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M.304 8.431c-.585-.446-.27-1.38.467-1.38h6.483L9.265.542c.223-.723 1.247-.723 1.47 0l2.011 6.509h6.483c.736 0 1.052.934.467 1.38l-5.278 4.032 2.02 6.538c.222.715-.606 1.293-1.201.838l-5.237-4-5.237 4c-.595.455-1.423-.123-1.201-.838l2.02-6.538L.304 8.431z"
        fill="#1A2E3B"
      />
    </svg>
  )
);
