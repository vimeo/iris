import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { grayscale, parseToRgb } from 'polished';

import { Input } from '../Input/Input';
import { Button } from '../../Button/Button';

import { roundValues } from '../../../color';

export function ColorInputs({
  colorMeta,
  colorSpace,
  dispatch,
  editing,
  error,
  onChange,
  ...props
}) {
  const ref = useRef<HTMLInputElement>();
  const { HEX, RGB } = colorMeta;

  useEffect(() => {
    if (editing) ref?.current?.focus();
  }, [editing]);

  const edit = () => dispatch({ type: 'SET_EDITING', payload: true });

  function cycle() {
    const type = 'SET_COLORSPACE';
    if (colorSpace === 'HEX') dispatch({ type, payload: 'RGB' });
    if (colorSpace === 'RGB') dispatch({ type, payload: 'HEX' });
  }

  let value;
  if (colorSpace === 'HEX') value = HEX;
  if (colorSpace === 'RGB') value = toRGBString(RGB);

  const propsInput = { colorMeta, onClick: edit };

  return (
    <>
      <Wrapper {...props}>
        <Button
          format="secondary"
          onClick={cycle}
          status={error ? 'negative' : null}
          style={{ height: '2.35rem' }}
        >
          {colorSpace}
        </Button>
        {editing ? (
          <InputEdit
            value={value}
            dispatch={dispatch}
            error={error}
            forwardRef={ref}
            onChange={onChange}
          />
        ) : (
          <>
            {colorSpace === 'HEX' && <InputHEX {...propsInput} />}
            {colorSpace === 'RGB' && <InputRGB {...propsInput} />}
          </>
        )}
      </Wrapper>
    </>
  );
}

function InputEdit({ value, dispatch, error, forwardRef, onChange }) {
  const onFocus = () => forwardRef?.current?.select();

  function onBlur() {
    const color = forwardRef?.current?.value;

    if (!validate(color).valid) {
      dispatch({ type: 'SET_LAST' });
      dispatch({ type: 'SET_COLORSPACE', payload: 'HEX' });
      dispatch({ type: 'SET_ERROR', payload: false });
    }

    dispatch({ type: 'SET_EDITING', payload: false });
  }

  function onKeyUp({ key }) {
    if (key === 'Enter') dispatch({ type: 'TOGGLE' });
  }

  function doChange({ target: { value } }) {
    const color = validate(value);

    if (color.valid) {
      onChange(color.value);
      dispatch({ type: 'SET_COLORSPACE', payload: color.type });
      dispatch({ type: 'SET_ERROR', payload: false });

      let payload;
      if (color.type === 'HEX') payload = color.value;
      if (color.type === 'RGB') payload = parseToRgb(color.value);

      const type = 'SET_' + color.type;
      dispatch({ type, payload });

      // NOTE:
      // Component does not support updating the spectrum
      // loupe position when the color value is updated.
      //
      // const coords = getCoordsFromHSL();
      // dispatch({ type: 'SET_COORDS', payload: coords });
    } else {
      dispatch({ type: 'SET_COLORSPACE', payload: '—' });
      dispatch({ type: 'SET_ERROR', payload: true });
    }
  }

  return (
    <ColorInput
      value={value}
      onBlur={onBlur}
      onChange={doChange}
      onFocus={onFocus}
      onKeyUp={onKeyUp}
      ref={forwardRef}
      status={error ? 'negative' : null}
      type="text"
    />
  );
}

function InputHEX({ colorMeta, onClick }) {
  const { HEX } = colorMeta;
  const props = { onClick, type: 'text' } as const;

  return (
    <ColorInput
      value={HEX}
      {...props}
      readOnly
    />
  );
}

function InputRGB({ colorMeta, onClick }) {
  const { RGB } = colorMeta;

  const props = {
    onClick,
    type: 'text',
    min: 0,
    max: 255,
    readOnly: true,
  } as const;

  return (
    <>
      <ColorInput value={toRGBString(RGB)} {...props} readOnly />
    </>
  );
}

function toRGBString(RGB) {
  const [red, green, blue] = roundValues(RGB);
  return `rgb(${red}, ${green}, ${blue})`;
}

function validate(color) {
  let type: 'HEX' | 'RGB';
  let valid = false;

  const value = color.replace(/\s+/g, '').replace(';', '');

  if (value.startsWith('#')) type = 'HEX';
  if (value.startsWith('rgb')) type = 'RGB';

  try {
    grayscale(value);
    if (type !== 'HEX') valid = true;
    if (value.length === 7) valid = true;
  } catch {}

  return { type, value, valid };
}

const ColorInput = styled(Input)`
  width: 100%;
  flex-grow: 1;
  display: inline-block;

  + div {
    margin-left: 0.334rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
