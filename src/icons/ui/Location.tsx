import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Location = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 270 448"
        ref={ref}
        {...props}
      >
        <path
          fill="#000000"
          fillRule="nonzero"
          d="M135 0C61 0 .8 58.7.8 132.7c0 16.4 3.5 34.3 9.8 50.4h-.1l.6 1.2 1.5 3.3L135 448l121.8-259.1.6-1.2c.5-1.1 1.1-2.2 1.6-3.4l.4-1.1c6.5-16.1 9.8-33.1 9.8-50.3C269.2 58.7 209 0 135 0zm0 174.9c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9 46.9 21 46.9 46.9-21 46.9-46.9 46.9z"
        />
      </svg>
    );
  }
);
