import React from 'react';
import { HexColorPicker } from 'react-colorful';
import { throttle } from '../../../utils';
import {
  ColorSpectrumWrapper,
  SelectedColor,
} from './ColorSelect.style';

export function ColorSelectSpectrum({
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
    <ColorSpectrumWrapper data-testid="color-select-spectrum">
      <SelectedColor
        color={value}
        data-testid="color-select-selected-value"
      />
      <HexColorPicker color={value} onChange={handleChange} />
    </ColorSpectrumWrapper>
  );
}
