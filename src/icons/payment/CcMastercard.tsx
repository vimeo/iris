import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const CcMastercard: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 128 128" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.6666 34.6667C10.6666 30.2484 14.2483 26.6667 18.6666 26.6667H109.333C113.752 26.6667 117.333 30.2484 117.333 34.6667V93.3334C117.333 97.7516 113.752 101.333 109.333 101.333H18.6666C14.2483 101.333 10.6666 97.7516 10.6666 93.3334V34.6667Z"
        fill="black"
      />
      <path
        d="M53.1061 43.7884H76.295V86.2069H53.1061V43.7884Z"
        fill="#FF5F00"
      />
      <path
        d="M54.5784 65.0014C54.5698 56.7227 58.3025 48.8999 64.7006 43.7884C53.8348 35.0965 38.231 36.3625 28.8552 46.6969C19.4794 57.0312 19.4794 72.9642 28.8552 83.2985C38.231 93.6329 53.8348 94.8989 64.7006 86.207C58.3046 81.0971 54.572 73.2776 54.5784 65.0014Z"
        fill="#EB001B"
      />
      <path
        d="M107.582 65.0014C107.581 75.3295 101.788 84.7508 92.6611 89.264C83.5345 93.7773 72.6773 92.5902 64.7006 86.2069C71.0938 81.0928 74.8266 73.2743 74.8266 64.9977C74.8266 56.7211 71.0938 48.9026 64.7006 43.7884C72.6773 37.4051 83.5345 36.218 92.6611 40.7313C101.788 45.2446 107.581 54.6659 107.582 64.9939V65.0014Z"
        fill="#F79E1B"
      />
    </svg>
  )
);

CcMastercard.tags = [
  'buy',
  'card',
  'credit card',
  'credit',
  'debit',
  'mastercard',
  'money',
  'payment',
  'purchase',
  'subscribe',
];
