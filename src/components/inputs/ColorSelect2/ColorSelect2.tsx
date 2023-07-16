import React, { useReducer, useRef, useEffect } from 'react';
import { parseToHsl } from 'polished';

import { Wrapper } from './ColorSelect2.style';
import { Props } from './ColorSelect2.types';
import { State, reducer } from './ColorSelect2.state';

import { ColorInputs } from './Inputs';
import { ColorSelectInput } from './ColorSelect2Input';
import { ColorSelectPicker } from './ColorSelect2Picker';
import { Presets, Props as PresetsProps } from './Presets';

import { PopOver } from '../../PopOver/PopOver';
import {
  withIris,
  MinorComponent,
  useOutsideClick,
} from '../../../utils';
import { colorSpaces } from '../../../color';

/**
 * An input that enables users to choose a color from a predefined range of colors from a color picker panel.
 * This components precedes the eventual deprecation of ColorPicker.tsx to ease migration and ensure backwards compatibility.
 */
export const ColorSelect2 = withIris<
  HTMLInputElement,
  Props,
  { Presets: MinorComponent<PresetsProps> }
>(ColorSelectComponent);

ColorSelect2.Presets = Presets;

function ColorSelectComponent({
  children,
  height = 360,
  initial = { color: '#F00', colorSpace: 'HEX' },
  label,
  onChange,
  onClose,
  onOpen,
  reset = { color: initial.color, label: 'reset' },
  size,
  throttleSpeed = 24,
  value,
  width = 360,
  attach = 'bottom',
  showHueSlider = true,
}: Props) {
  const childrenRef = useRef();
  const popOverRef = useRef();

  useOutsideClick(
    [childrenRef, popOverRef],
    () => {
      if (state.open) {
        dispatch({ type: 'CLOSE', payload: true });
        onClose?.();
      }
    },
    { useCapture: true }
  );

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
        <div onClick={toggle} ref={childrenRef}>
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
