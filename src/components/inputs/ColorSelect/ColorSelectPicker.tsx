import React from 'react';
import { HexColorPicker } from 'react-colorful';
import { throttle } from '../../../utils';
import {
  ColorSelectPickerWrapper,
  SelectedColor,
} from './ColorSelect.style';

export function ColorSelectPicker({
  value,
  dispatch,
  onChange,
  throttleSpeed,
}) {
  const handleChange = throttle((color) => {
    dispatch({ type: 'SET_HEX', payload: color });
    if (onChange) onChange(color);
  }, throttleSpeed);

  return (
    <ColorSelectPickerWrapper data-testid="color-select-picker">
      <SelectedColor
        color={value}
        data-testid="color-select-selected-value"
      />
      <HexColorPicker color={value} onChange={handleChange} />
    </ColorSelectPickerWrapper>
  );
}
