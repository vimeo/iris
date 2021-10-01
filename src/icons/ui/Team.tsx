import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Team = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        d="M20.9992 19.1053H10.5781V14.5264C10.5781 12.8695 11.9213 11.5264 13.5781 11.5264H17.9992C19.656 11.5264 20.9992 12.8695 20.9992 14.5264V19.1053Z"
        strokeWidth="2"
      />
      <circle cx="15.7905" cy="7.26316" r="3.26316" strokeWidth="2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.63322 10.4753C7.89767 10.4753 8.9227 9.43802 8.9227 8.15853C8.9227 6.87903 7.89767 5.8418 6.63322 5.8418C5.36878 5.8418 4.34375 6.87903 4.34375 8.15853C4.34375 9.43802 5.36878 10.4753 6.63322 10.4753Z"
        strokeWidth="2"
      />
      <path
        d="M9.63158 13.5259V16.7364H3V13.5259C3 12.4213 3.89543 11.5259 5 11.5259H7.63158C8.73615 11.5259 9.63158 12.4213 9.63158 13.5259Z"
        strokeWidth="2"
      />
    </svg>
  )
);
