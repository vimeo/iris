import React from 'react';

import { HandleStyled, Hidden } from './Slider.style';
import { Focus } from '../../../utils';

interface Props {
  disabled: boolean;
  handle: string;
  min: number;
  max: number;
  setDragging: (value: string) => void;
  setFocus: (value: string) => void;
  value: number;
}

export const Handle = React.forwardRef<HTMLInputElement, Props>(
  (
    { disabled, handle, min, max, setDragging, setFocus, value },
    ref
  ) => {
    return (
      <HandleStyled
        style={{ left: (value / max) * 100 + '%' }}
        aria-label={handle}
        onMouseDown={() => {
          !disabled && setDragging(handle);
        }}
      >
        <Hidden
          min={min}
          max={max}
          value={value}
          onFocus={() => {
            setFocus(handle);
          }}
          onBlur={() => {
            setFocus(null);
          }}
          ref={ref}
          readOnly
        />
        <Focus parent={Hidden} radius={50} isKeyboardOnly />
      </HandleStyled>
    );
  }
);
