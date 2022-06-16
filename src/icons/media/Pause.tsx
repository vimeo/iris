import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Pause = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" ref={ref} {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.3333 10.6667C18.3878 10.6667 16 13.0546 16 16.0001V48.0001C16 50.9456 18.3878 53.3334 21.3333 53.3334C24.2789 53.3334 26.6667 50.9456 26.6667 48.0001V16.0001C26.6667 13.0546 24.2789 10.6667 21.3333 10.6667ZM42.6667 10.6667C39.7211 10.6667 37.3333 13.0546 37.3333 16.0001V48.0001C37.3333 50.9456 39.7211 53.3334 42.6667 53.3334C45.6122 53.3334 48 50.9456 48 48.0001V16.0001C48 13.0546 45.6122 10.6667 42.6667 10.6667Z"
      />
    </svg>
  )
);
