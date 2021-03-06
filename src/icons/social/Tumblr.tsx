import React, { Ref, SVGAttributes, forwardRef } from 'react';

export const Tumblr = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    return (
      <svg viewBox="0 0 1000 1000" ref={ref} {...props}>
        <path d="M576.4 777.7c-14.7-8.7-28.2-23.5-33.6-37.8-5.4-14.4-4.7-43.7-4.7-94.4V421.1h204.1V264.9H538.1V62.4H412.5c-5.6 45.1-15.9 82.3-30.9 111.5-15 29.2-34.7 54.3-59.6 75.1-24.7 20.8-64.8 36.9-99.5 48v124h119.9v306.9c0 40.1 4.2 70.6 12.7 91.7 8.5 21 23.6 41 45.6 59.7 21.9 18.6 48.3 33 79.4 43.1 31 10.1 54.8 15.1 95.1 15.1 35.5 0 68.5-3.6 99.1-10.6 30.6-7.2 64.8-19.5 102.4-37v-138c-44.2 28.8-88.6 43.1-133.4 43.1-25 0-47.3-5.8-66.9-17.3z" />
      </svg>
    );
  }
);
