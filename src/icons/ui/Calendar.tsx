import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Calendar = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props} ref={ref}>
      <mask id="path-1-inside-1" fill="white">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7 3c0-.5523.4477-1 1-1s1 .4477 1 1v1h2V3c0-.5523.4477-1 1-1s1 .4477 1 1v1h2V3c0-.5523.4477-1 1-1s1 .4477 1 1v1h2c1.1046 0 2 .8954 2 2v14c0 1.1046-.8954 2-2 2H5c-1.1046 0-2-.8954-2-2V6c0-1.1046.8954-2 2-2h2V3zm8 3v1c0 .5523.4477 1 1 1s1-.4477 1-1V6h2v14H5V6h2v1c0 .5523.4477 1 1 1s1-.4477 1-1V6h2v1c0 .5523.4477 1 1 1s1-.4477 1-1V6h2zm-6 7v-2H7v2h2zm4-2v2h-2v-2h2zm4 2v-2h-2v2h2zm-8 2v2H7v-2h2zm2 0v2h2v-2h-2z"
        />
      </mask>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 3c0-.5523.4477-1 1-1s1 .4477 1 1v1h2V3c0-.5523.4477-1 1-1s1 .4477 1 1v1h2V3c0-.5523.4477-1 1-1s1 .4477 1 1v1h2c1.1046 0 2 .8954 2 2v14c0 1.1046-.8954 2-2 2H5c-1.1046 0-2-.8954-2-2V6c0-1.1046.8954-2 2-2h2V3zm8 3v1c0 .5523.4477 1 1 1s1-.4477 1-1V6h2v14H5V6h2v1c0 .5523.4477 1 1 1s1-.4477 1-1V6h2v1c0 .5523.4477 1 1 1s1-.4477 1-1V6h2zm-6 7v-2H7v2h2zm4-2v2h-2v-2h2zm4 2v-2h-2v2h2zm-8 2v2H7v-2h2zm2 0v2h2v-2h-2z"
        fill="#23313B"
      />
      <path
        d="M9 4H8v1h1V4zm2 0v1h1V4h-1zm2 0h-1v1h1V4zm2 0v1h1V4h-1zm2 0h-1v1h1V4zM7 4v1h1V4H7zm8 2h1V5h-1v1zm2 0V5h-1v1h1zm2 0h1V5h-1v1zm0 14v1h1v-1h-1zM5 20H4v1h1v-1zM5 6V5H4v1h1zm2 0h1V5H7v1zm2 0V5H8v1h1zm2 0h1V5h-1v1zm2 0V5h-1v1h1zm-4 5h1v-1H9v1zm0 2v1h1v-1H9zm-2-2v-1H6v1h1zm0 2H6v1h1v-1zm6 0v1h1v-1h-1zm0-2h1v-1h-1v1zm-2 2h-1v1h1v-1zm0-2v-1h-1v1h1zm6 0h1v-1h-1v1zm0 2v1h1v-1h-1zm-2-2v-1h-1v1h1zm0 2h-1v1h1v-1zm-6 4v1h1v-1H9zm0-2h1v-1H9v1zm-2 2H6v1h1v-1zm0-2v-1H6v1h1zm4 2h-1v1h1v-1zm0-2v-1h-1v1h1zm2 2v1h1v-1h-1zm0-2h1v-1h-1v1zM8 1c-1.1046 0-2 .8954-2 2h2V1zm2 2c0-1.1046-.8954-2-2-2v2h2zm0 1V3H8v1h2zm1-1H9v2h2V3zm-1 0v1h2V3h-2zm2-2c-1.1046 0-2 .8954-2 2h2V1zm2 2c0-1.1046-.8954-2-2-2v2h2zm0 1V3h-2v1h2zm1-1h-2v2h2V3zm1 1V3h-2v1h2zm0-1V1c-1.1046 0-2 .8954-2 2h2zm0 0h2c0-1.1046-.8954-2-2-2v2zm0 0v1h2V3h-2zm3 0h-2v2h2V3zm3 3c0-1.6569-1.3431-3-3-3v2c.5523 0 1 .4477 1 1h2zm0 14V6h-2v14h2zm-3 3c1.6569 0 3-1.3431 3-3h-2c0 .5523-.4477 1-1 1v2zM5 23h14v-2H5v2zm-3-3c0 1.6569 1.3432 3 3 3v-2c-.5523 0-1-.4477-1-1H2zM2 6v14h2V6H2zm3-3C3.3432 3 2 4.3431 2 6h2c0-.5523.4477-1 1-1V3zm2 0H5v2h2V3zM6 3v1h2V3H6zm10 4V6h-2v1h2zm0 0h-2c0 1.1046.8954 2 2 2V7zm0 0v2c1.1046 0 2-.8954 2-2h-2zm0-1v1h2V6h-2zm3-1h-2v2h2V5zm1 15V6h-2v14h2zM5 21h14v-2H5v2zM4 6v14h2V6H4zm3-1H5v2h2V5zm1 2V6H6v1h2zm0 0H6c0 1.1046.8954 2 2 2V7zm0 0v2c1.1046 0 2-.8954 2-2H8zm0-1v1h2V6H8zm3-1H9v2h2V5zm1 2V6h-2v1h2zm0 0h-2c0 1.1046.8954 2 2 2V7zm0 0v2c1.1046 0 2-.8954 2-2h-2zm0-1v1h2V6h-2zm3-1h-2v2h2V5zm-7 6v2h2v-2H8zm-1 1h2v-2H7v2zm1 1v-2H6v2h2zm1-1H7v2h2v-2zm5 1v-2h-2v2h2zm-3 1h2v-2h-2v2zm-1-3v2h2v-2h-2zm3-1h-2v2h2v-2zm3 1v2h2v-2h-2zm-1 1h2v-2h-2v2zm1 1v-2h-2v2h2zm1-1h-2v2h2v-2zm-7 5v-2H8v2h2zm-3 1h2v-2H7v2zm-1-3v2h2v-2H6zm3-1H7v2h2v-2zm3 3v-2h-2v2h2zm1-1h-2v2h2v-2zm-1-1v2h2v-2h-2zm-1 1h2v-2h-2v2z"
        fill="#23313B"
        mask="url(#path-1-inside-1)"
      />
    </svg>
  )
);
