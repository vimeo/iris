import React, { useEffect, useRef } from 'react';

import {
  HandleStyled,
  Hidden,
  LabelInput,
  Label,
} from './Slider.style';

import { Focus } from '../../../utils';

export function Handle({
  disabled,
  dragging,
  editableLabel,
  focused,
  formatter,
  handle,
  max,
  min,
  onChange,
  setDragging,
  setFocus,
  setValue,
  value,
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const event = new Event('change', { bubbles: true });
    ref?.current?.dispatchEvent(event);
    onChange && onChange(event);
  }, [onChange, value]);

  return (
    <HandleStyled
      focused={focused === handle || dragging === handle}
      style={{ left: (value / max) * 100 + '%' }}
      onMouseDown={() => !disabled && setDragging(handle)}
      {...props}
    >
      <Hidden
        min={min}
        max={max}
        value={value}
        onFocus={setFocus(handle)}
        onBlur={setFocus(false)}
        ref={ref}
        readOnly
      />
      <Focus
        parent={Hidden}
        radius={50}
        focused={focused === handle || dragging === handle}
      />

      <Label focused={focused}>
        {editableLabel ? (
          <>
            <LabelInput
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={setFocus(handle)}
              onBlur={setFocus(false)}
              focused={focused === handle}
            />
            <Focus parent={LabelInput} distance={1} />
          </>
        ) : (
          formatter(value)
        )}
      </Label>
    </HandleStyled>
  );
}
