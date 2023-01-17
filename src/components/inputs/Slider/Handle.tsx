import React, { useEffect, useRef } from 'react';

import {
  HandleStyled,
  Hidden,
  LabelInput,
  Label,
  UnitSign,
} from './Slider.style';

import { Focus } from '../../../utils';

export function Handle({
  disabled,
  dragging,
  editableLabel,
  inputLabelArrows,
  stickyLabel,
  unitSignType,
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
      style={{ left: value + '%' }}
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

      {stickyLabel && (
        <Label focused={focused} stickyLabel={stickyLabel}>
          {editableLabel ? (
            <>
              <LabelInput
                value={value}
                stickyLabel={stickyLabel}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                onFocus={setFocus(handle)}
                onBlur={setFocus(false)}
                focused={focused === handle}
                inputLabelArrows={inputLabelArrows}
              />
              <Focus parent={LabelInput} distance={1} />
              <UnitSign>{unitSignType}</UnitSign>
            </>
          ) : (
            <div>
              {formatter(value)}
              {unitSignType}
            </div>
          )}
        </Label>
      )}
    </HandleStyled>
  );
}
