import React, { useLayoutEffect, useRef, useState } from 'react';
import { hslToColorString, parseToHsl } from 'polished';

import { Dot } from './ColorSelect.style';

import { InnerButton } from '../InnerButton';
import { Input } from '../Input/Input';
import { geometry } from '../../../utils';
import { History } from '../../../icons';

export function ColorSelectInput({
  colorMeta,
  dispatch,
  label,
  onChange,
  reset,
  size,
  toggle,
}) {
  const ref = useRef();
  const { HEX } = colorMeta;
  const [height, heightSet] = useState(0);

  useLayoutEffect(() => {
    const inputHeight = geometry(ref?.current).height;
    heightSet(inputHeight);
  }, []);

  function resetValues(event) {
    event.stopPropagation();

    onChange && onChange(hslToColorString(parseToHsl(reset.color)));
    dispatch({ type: 'SET_HSL', payload: parseToHsl(reset.color) });
  }

  const style = { paddingLeft: '2.25rem', cursor: 'pointer' };

  return (
    <div style={{ position: 'relative' }}>
      <Input
        label={label}
        onClick={toggle}
        ref={ref}
        size={size}
        style={style}
        type="text"
        value={HEX}
        readOnly
        onChange={({ target: { value } }) => {
          onChange && onChange(value);
          dispatch({ type: 'SET_HEX', payload: value });
        }}
      >
        <Dot style={{ background: HEX }} />
        {reset.label &&
          HEX.toLowerCase() !== reset.color.toLowerCase() && (
            <InnerButton
              format="basic"
              variant="minimalTransparent"
              size={size}
              onClick={resetValues}
              tooltipText={reset.label}
              height={height}
            >
              <History style={{ opacity: 0.5 }} />
            </InnerButton>
          )}
      </Input>
    </div>
  );
}
