import React from 'react';

import { Wrapper } from './ColorSelect2.style';
import { Presets } from './Presets';
import { ColorSelectPicker } from './ColorSelect2Picker';
import { ColorInputs } from './Inputs';

export function ColorSelect2PopoverContent({
  width,
  height,
  showHueSlider,
  popOverRef,
  presets,
  dispatch,
  onChange,
  throttleSpeed,
  colorMeta,
  state,
}) {
  return (
    <Wrapper
      width={width}
      height={height}
      showHueSlider={showHueSlider}
      ref={popOverRef}
    >
      {presets && (
        <Presets
          selectedColor={colorMeta.HEX}
          palette={presets.palette}
          label={presets.label}
          onEdit={presets.onEdit}
          onSelect={(color: string) => {
            dispatch({ type: 'SET_HEX', payload: color });
            onChange(color);
          }}
        />
      )}
      <ColorSelectPicker
        dispatch={dispatch}
        onChange={onChange}
        throttleSpeed={throttleSpeed}
        value={colorMeta.HEX}
      />
      <ColorInputs
        dispatch={dispatch}
        onChange={onChange}
        {...state}
      />
    </Wrapper>
  );
}
