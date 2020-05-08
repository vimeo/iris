import React, { Ref, SVGAttributes, forwardRef } from 'react';

export const Linkedin = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    return (
      <svg viewBox="0 0 20 20" ref={ref} {...props}>
        <path
          fill="#474747"
          d="M3 5.104C3 3.942 3.934 3 5.087 3c1.152 0 2.086.942 2.086 2.104a2.095 2.095 0 01-2.086 2.103A2.095 2.095 0 013 5.104zM15.944 8.352c2.417 0 4.147 1.476 4.147 4.53V20.1H16.58v-5.984c0-1.641-.624-2.557-1.921-2.557-1.413 0-2.15.954-2.15 2.557V20.1H9.123V8.7h3.384v1.535s1.018-1.883 3.436-1.883zM3.34 20.1h3.528V8.7H3.339z"
        />
      </svg>
    );
  },
);
