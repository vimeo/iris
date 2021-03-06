import React, { Ref, SVGAttributes, forwardRef } from 'react';

export const Soundcloud = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    return (
      <svg viewBox="0 0 1000 1000" ref={ref} {...props}>
        <path d="M280.1 437.3c-8.4 0-15.8 3-21.8 9s-9.2 13.2-9.2 21.6v251.2h.2c0 7.9 2.9 13.8 8.6 17.7s13.1 5.9 22 5.9c8.7 0 16-2 21.6-5.9s8.5-9.8 8.5-17.7V467.8c0-8.4-3.1-15.6-8.9-21.6-5.7-5.9-12.8-8.9-21-8.9zm-187.7 70c-8.1 0-15.4 2.9-21.2 8.8-5.8 5.8-9 13-9 21.4v118.1c0 10.9 4.2 19.1 12.1 24.6 7.9 5.6 16.4 7.5 25.4 5.9 8.4-1.6 14.2-4.6 17.6-9 3.4-4.3 5-11.5 5-21.6v-118c0-8.4-2.7-15.5-8.6-21.4-5.9-5.9-12.9-8.8-21.3-8.8zm93.7-106.2c-8.1 0-15.2 2.9-21 8.8-5.8 5.8-8.8 12.8-8.8 21V706c0 7.9 2.9 13.8 8.4 17.7 5.6 3.9 12.7 5.9 21.4 5.9 9 0 16.2-2 21.8-5.9s8.4-9.8 8.4-17.7V430.8c0-8.1-2.9-15.1-8.8-21-5.9-5.8-13-8.7-21.4-8.7zm196.5-126.7c-9-2.2-17.7.4-26.4 7.7s-13 17.6-13 30.9v407.2c0 14.9 9.9 22.4 30 22.4s30-7.5 30-22.4V313.1c0-22.8-6.8-35.7-20.6-38.7zm514.6 233.7c-27-26.9-59.5-40.3-97.5-40.3-18.7 0-36.4 3.5-52.9 10.6-3.5-40.7-16.4-78-38.5-111.8s-51.1-60.5-86.9-80c-35.8-19.5-74.5-29.3-116-29.3-17.9 0-36.1 2.2-54.3 6.5-8.4 2.7-12.8 11.1-12.8 25.2v443c0 1.6.8 3.5 2 5.7s3.1 3.7 5.6 4.5l354.3.4c37.7 0 70.1-13.4 97.1-40.3s40.5-59.3 40.5-97.3c-.1-37.7-13.6-70-40.6-96.9z" />
      </svg>
    );
  }
);
