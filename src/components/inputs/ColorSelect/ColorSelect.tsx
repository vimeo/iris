import React, { useReducer, useRef, useEffect } from 'react';
import { parseToHsl } from 'polished';

import { Wrapper } from './ColorSelect.style';
import { Props } from './ColorSelect.types';
import { State, reducer } from './ColorSelect.state';

import { ColorInputs } from './Inputs';
import { ColorSelectInput } from './ColorSelectInput';
import { ColorSelectPicker } from './ColorSelectPicker';
import { Presets, Props as PresetsProps } from './Presets';

import { PopOver } from '../../PopOver/PopOver';
import {
  withIris,
  MinorComponent,
  useOutsideClick,
} from '../../../utils';
import { colorSpaces } from '../../../color';

export const ColorSelect = withIris<
  HTMLInputElement,
  Props,
  { Presets: MinorComponent<PresetsProps> }
>(ColorSelectComponent);

ColorSelect.Presets = Presets;

function ColorSelectComponent({
  children,
  height = 360,
  initial = { color: '#F00', colorSpace: 'HEX' },

  // DEPRECATED
  initialColor = '#F00',
  //

  label,
  onChange,
  onClose,
  onOpen,
  reset = { color: initial.color, label: 'reset' },

  // DEPRECATED
  resetColor = initialColor || initial.color,
  //

  resetLabel,
  size,
  throttleSpeed = 24,
  value,
  width = 360,
  attach = 'bottom',
  showHueSlider = true,
}: Props) {
  const childrenRef = useRef();
  const popOverRef = useRef();

  useOutsideClick([childrenRef, popOverRef], () => {
    if (state.open) {
      onClose?.();
      dispatch({ type: 'CLOSE', payload: true });
    }
  });

  // deprecation handling
  if (initialColor) initial.color = initialColor;
  if (resetColor) reset.color = resetColor;
  if (resetLabel) reset.label = resetLabel;

  const defaultColor = parseToHsl(initial.color);
  const initialColors = colorSpaces(defaultColor);

  const initialState: State = {
    open: false,
    editing: false,
    error: false,
    colorMeta: { HSL: defaultColor, ...initialColors },
    colorSpace: 'HEX',
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { open, colorMeta } = state;

  useEffect(() => {
    dispatch({ type: 'SET_HEX', payload: value });
  }, [value]);

  const toggle = () => {
    if (open) onClose?.();
    if (!open) onOpen?.();
    dispatch({ type: 'TOGGLE' });
  };

  return (
    <PopOver
      attach={attach}
      active={open}
      content={
        <Wrapper
          width={width}
          height={height}
          showHueSlider={showHueSlider}
          ref={popOverRef}
        >
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
      }
    >
      {children ? (
        <div
          onClick={toggle}
          ref={childrenRef}
          data-testid="color-select-trigger"
        >
          {children}
        </div>
      ) : (
        <div ref={childrenRef}>
          <ColorSelectInput
            colorMeta={colorMeta}
            dispatch={dispatch}
            label={label}
            onChange={onChange}
            reset={reset}
            size={size}
            toggle={toggle}
          />
        </div>
      )}
    </PopOver>
  );
}
