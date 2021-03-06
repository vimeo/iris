import React, { Ref, SVGAttributes, forwardRef } from 'react';

export const SmilingFace = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    return (
      <svg viewBox="0 0 32 32" ref={ref} {...props}>
        <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 29.12C8.766 29.12 2.88 23.234 2.88 16S8.766 2.88 16 2.88 29.12 8.766 29.12 16 23.234 29.12 16 29.12z" />
        <path d="M10 23s1 4 6 4 6-4 6-4H10z" />
        <circle cx={9} cy={19} r={2} />
        <circle cx={23} cy={19} r={2} />
      </svg>
    );
  }
);
