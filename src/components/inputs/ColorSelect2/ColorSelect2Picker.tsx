import React from 'react';
import { HexColorPicker } from 'react-colorful';
import { throttle } from '../../../utils';

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
    <div aria-label="color picker">
      <HexColorPicker color={value} onChange={handleChange} />
    </div>
  );
}
