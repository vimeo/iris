import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { grayscale, parseToHsl, parseToRgb } from 'polished';

import { Input } from '../Input/Input';
import { Button } from '../../buttons/Button/Button';

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
  const { HEX, HSL, RGB } = colorMeta;

  useEffect(() => {
    if (editing) ref?.current?.focus();
  }, [editing]);

  const edit = () => dispatch({ type: 'SET_EDITING', payload: true });

  function cycle() {
    const type = 'SET_COLORSPACE';
    if (colorSpace === 'HEX') dispatch({ type, payload: 'RGB' });
    if (colorSpace === 'RGB') dispatch({ type, payload: 'HSL' });
    if (colorSpace === 'HSL') dispatch({ type, payload: 'HEX' });
  }

  let value;
  if (colorSpace === 'HEX') value = HEX;
  if (colorSpace === 'RGB') value = toRGBString(RGB);
  if (colorSpace === 'HSL') value = toHSLString(HSL);

  const propsInput = { colorMeta, onClick: edit };

  return (
    <>
      <Wrapper {...props}>
        <Button
          format="soft"
          onClick={cycle}
          size="sm"
          variant="outline"
          status={error ? 'negative' : null}
          style={{ opacity: '0.667', marginRight: '1rem' }}
          pill
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
            {colorSpace === 'HSL' && <InputHSL {...propsInput} />}
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
      if (color.type === 'HSL') payload = parseToHsl(color.value);

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
      style={{ display: 'inline-block' }}
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
      style={{ display: 'inline-block' }}
      {...props}
      readOnly
    />
  );
}

function InputRGB({ colorMeta, onClick }) {
  const {
    RGB: { red, blue, green },
  } = colorMeta;

  const props = {
    onClick,
    type: 'text',
    min: 0,
    max: 255,
    readOnly: true,
  } as const;

  return (
    <>
      <ColorInput value={red} {...props} readOnly />
      <ColorInput value={green} {...props} readOnly />
      <ColorInput value={blue} {...props} readOnly />
    </>
  );
}

function InputHSL({ colorMeta, onClick }) {
  const {
    HSL: { hue, saturation, lightness },
  } = colorMeta;

  const props = {
    onClick,
    type: 'text',
    min: 0,
    max: 100,
    readOnly: true,
  } as const;

  return (
    <>
      <ColorInput value={hue} max={360} {...props} />
      <ColorInput value={saturation * 100} {...props} />
      <ColorInput value={lightness * 100} {...props} />
    </>
  );
}

function toHSLString(HSL) {
  const [hue, saturation, lightness] = roundValues(HSL);
  return `hsl(${hue}, ${saturation}, ${lightness})`;
}

function toRGBString(RGB) {
  const [red, green, blue] = roundValues(RGB);
  return `rgb(${red}, ${green}, ${blue})`;
}

function validate(color) {
  let type: 'HEX' | 'HSL' | 'RGB';
  let valid = false;

  const value = color.replace(/\s+/g, '').replace(';', '');

  if (value.startsWith('#')) type = 'HEX';
  if (value.startsWith('rgb')) type = 'RGB';
  if (value.startsWith('hsl')) type = 'HSL';

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
  display: inline-flex;

  + div {
    margin-left: 0.334rem;
  }
`;

const Wrapper = styled.div`
  padding: 0.5rem 1.5rem 1.5rem;
  width: 100%;
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
`;
