import React from 'react';

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
  setDragging,
  setFocus,
  setValue,
  value,
  ...props
}) {
  return (
    <HandleStyled
      focused={focused === handle || dragging === handle}
      style={{ left: value + '%' }}
      onMouseDown={() => !disabled && setDragging(handle)}
      {...props}
    >
      <Hidden
        min={min}
        max={max}
        value={value}
        onChange={setValue}
        onFocus={setFocus(handle)}
        onBlur={setFocus(false)}
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
              onChange={setValue}
              onFocus={setFocus(handle)}
              onBlur={setFocus(false)}
              focused={focused === handle}
            />
            <Focus parent={LabelInput} />
          </>
        ) : (
          formatter(value)
        )}
      </Label>
    </HandleStyled>
  );
}
