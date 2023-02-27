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
    <ColorSpectrumWrapper>
      <SelectedColor color={value} />
      <HexColorPicker color={value} onChange={handleChange} />
    </ColorSpectrumWrapper>
  );
}
