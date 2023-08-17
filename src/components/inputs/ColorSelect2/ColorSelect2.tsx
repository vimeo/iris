import React, { useReducer, useRef, useEffect } from 'react';
import { parseToHsl } from 'polished';

import { Props } from './ColorSelect2.types';
import { State, reducer } from './ColorSelect2.state';

import { ColorSelectInput } from './ColorSelect2Input';

import { PopOver } from '../../PopOver/PopOver';
import { withIris, useOutsideClick } from '../../../utils';
import { colorSpaces } from '../../../color';
import { ColorSelect2PopoverContent } from './ColorSelect2PopoverContent';

/**
 * An input that enables users to choose a color from a predefined range of colors from a color picker panel.
 * This components precedes the eventual deprecation of ColorPicker.tsx to ease migration and ensure backwards compatibility.
 */
export const ColorSelect2 = withIris<HTMLInputElement, Props>(
  ColorSelectComponent
);

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
  disabled,
  presets,
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
    { capture: true }
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
        <ColorSelect2PopoverContent
          {...{
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
          }}
        />
      }
    >
      {children ? (
        <div onClick={() => !disabled && toggle()} ref={childrenRef}>
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
            disabled={disabled}
          />
        </div>
      )}
    </PopOver>
  );
}
