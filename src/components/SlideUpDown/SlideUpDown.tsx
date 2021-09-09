import React, { useState, useLayoutEffect, useRef } from 'react';

import { Props } from './SlideUpDown.types';

import { withIris } from '../../utils';

export const SlideUpDown = withIris<HTMLDivElement, Props>(
  SlideUpDownComponent
);

function SlideUpDownComponent({
  automatic = false,
  forwardRef,
  children,
  showing,
  ...props
}: Props) {
  const ref = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useLayoutEffect(() => {
    if (showing) setMaxHeight(ref.current.scrollHeight);
  }, [children, showing]);

  useLayoutEffect(() => {
    if (!automatic) setMaxHeight(0);
  }, [automatic]);

  return (
    <div
      ref={ref}
      style={{
        overflowY: 'hidden',
        transition: 'all 200ms ease-in-out',
        maxHeight: showing ? maxHeight : 0,
      }}
      {...props}>
      {children}
    </div>
  );
}
