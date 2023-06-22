import React from 'react';

import { HandleStyled } from './Slider.style';

export function Handle({
  disabled,
  dragging,
  handle,
  max,
  setDragging,
  value,
  ...props
}) {
  return (
    <HandleStyled
      style={{ left: (value / max) * 100 + '%' }}
      aria-label={handle}
      onMouseDown={() => {
        !disabled && setDragging(handle);
      }}
      {...props}
    />
  );
}
