import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Music = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" ref={ref} {...props}>
      <path
        id="music_32"
        d="M29.671,0.028l-20,3.333C8.707,3.522,8,4.356,8,5.334v15.034C7.372,20.144,6.705,20,6,20
		c-3.314,0-6,2.686-6,6s2.686,6,6,6s6-2.686,6-6V10.973l16-2.667v8.061C27.372,16.144,26.705,16,26,16c-3.314,0-6,2.686-6,6
		s2.686,6,6,6s6-2.686,6-6V2C32,0.765,30.89-0.175,29.671,0.028z"
      />
    </svg>
  )
);
