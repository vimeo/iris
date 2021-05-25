import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Registration = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 26" fill="none" {...props} ref={ref}>
      <path
        fill="#23313B"
        fillRule="evenodd"
        d="M22.0962 12.1185l-.1211-.1323-.1414-.1458c-1.1716-1.2085-3.071-1.2085-4.2426 0l-7.0004 7.2204a1.0435 1.0435 0 00-.2828.5835l-.495 3.5737c-.0943.6807.4714 1.2642 1.1314 1.1669l3.4648-.5105a.9887.9887 0 00.5657-.2917l7.0003-7.2205c1.1298-1.1652 1.1701-3.0286.1211-4.2437zm-1.5353 2.7833l-6.7646 6.9773-1.8149.2675.2592-1.872 6.7647-6.9773c.3905-.4028 1.0237-.4028 1.4142 0l.1414.1458c.3906.4028.3906 1.0559 0 1.4587z"
        clipRule="evenodd"
      />
      <path
        fill="#23313B"
        d="M5 21.4251V5.9535h2.5V3.8906H5c-1.1046 0-2 .9236-2 2.0629v15.4716c0 1.1393.8954 2.0629 2 2.0629h3v-2.0629H5zM19.5 5.9535c0-1.1393-.8954-2.0629-2-2.0629H15v2.0629h2.5v3.0943h2V5.9535z"
      />
      <rect
        width="8"
        height="4.1258"
        stroke="#23313B"
        stroke-width="2"
        rx="1"
        transform="matrix(-1 0 0 1 15 2.8594)"
      />
    </svg>
  )
);
