import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const UploadCloudFilled = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path d="M20.921 11.498a6.37 6.37 0 0 0 .079-.953C21 6.93 17.978 4 14.25 4c-2.701 0-5.024 1.542-6.103 3.764a3.428 3.428 0 0 0-1.772-.491C4.511 7.273 3 8.738 3 10.545c0 .324.05.636.141.931C1.32 12.035 0 13.686 0 15.636 0 18.046 2.015 20 4.5 20H11v-5.379L9.561 16.06a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.707l3.5-3.5a.5.5 0 0 1 .707 0l3.5 3.5a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 0 1-.707 0L13 14.621V20h6.5c2.485 0 4.5-1.954 4.5-4.364 0-1.928-1.291-3.561-3.079-4.138z" />
    </svg>
  )
);
