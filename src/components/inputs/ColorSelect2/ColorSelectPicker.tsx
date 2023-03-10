import React from 'react';
import { HexColorPicker } from 'react-colorful';
import { throttle } from '../../../utils';
import {
  ColorSelectPickerWrapper,
  SelectedColor,
} from './ColorSelect2.style';

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
    <ColorSelectPickerWrapper aria-label="color picker">
      <SelectedColor color={value} aria-label="color preview" />
      <HexColorPicker color={value} onChange={handleChange} />
    </ColorSelectPickerWrapper>
  );
}
