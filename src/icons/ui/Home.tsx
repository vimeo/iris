import React, { forwardRef, Ref } from 'react';
import { IrisSVGProps } from '../../utils';
export const Home = forwardRef(
  (props: IrisSVGProps, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path d="M17 20h-4c-.6 0-1-.4-1-1v-5H8v5c0 .6-.4 1-1 1H3c-1.1 0-2-.9-2-2V8c0-.3.1-.6.3-.8l8-7c.4-.3.9-.3 1.3 0l8 7c.3.2.4.5.4.8v10c0 1.1-.9 2-2 2zm-3-2h3V8.5l-7-6.1-7 6.1V18h3v-5c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v5z" />
    </svg>
  ),
);
