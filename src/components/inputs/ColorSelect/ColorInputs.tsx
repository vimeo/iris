import React, { useState } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

export const ColorInputs = ({
  dispatch,
  HEX,
  HSL,
  RGB,
  HSV,
  onChange,
  ...props
}) => {
  const [inputType, setInputType] = useState('HEX');

  const setHEX = e => {
    onChange && onChange(e.target.value);
    dispatch({
      type: 'SET_HEX',
      payload: e.target.value,
    });
  };

  const setRGB = e =>
    dispatch({
      type: 'SET_RGB',
      payload: {
        ...RGB,
        red: parseInt(e.target.value),
      },
    });

  const setHSL = e =>
    dispatch({
      type: 'SET_HSL',
      payload: {
        ...HSL,
        hue: parseInt(e.target.value),
      },
    });

  return (
    <ColorInputsStyled {...props}>
      {inputType === 'HEX' && (
        <>
          <Title onClick={() => setInputType('RGB')}>HEX</Title>
          <ColorInput
            type="text"
            value={HEX}
            onChange={setHEX}
            style={{ width: '83%' }}
          />
        </>
      )}
      {inputType === 'RGB' && (
        <>
          <Title onClick={() => setInputType('HSL')}>RGB</Title>
          <ColorInput
            type="number"
            min="0"
            max="255"
            value={RGB.red}
            onChange={setRGB}
          />
          <ColorInput
            type="number"
            min="0"
            max="255"
            value={RGB.green}
            onChange={setRGB}
          />
          <ColorInput
            type="number"
            min="0"
            max="255"
            value={RGB.blue}
            onChange={setRGB}
          />
        </>
      )}
      {inputType === 'HSL' && (
        <>
          <Title onClick={() => setInputType('HEX')}>HSL</Title>
          <ColorInput
            type="number"
            min="0"
            max="360"
            value={HSL.hue}
            onChange={setHSL}
          />
          <ColorInput
            type="number"
            min="0"
            max="100"
            value={HSL.saturation * 100}
            onChange={setHSL}
          />
          <ColorInput
            type="number"
            min="0"
            max="100"
            value={HSL.lightness * 100}
            onChange={setHSL}
          />
        </>
      )}
    </ColorInputsStyled>
  );
};

const ColorInput = styled.input`
  display: inline-flex;
  border: 0;
  padding: 0.2rem;
  border-bottom: 1px solid
    ${({ theme }) => rgba(theme.content.color, 0.5)};
  font-size: 1rem;
  color: ${({ theme }) => theme.content.color};
  font-weight: 600;
  background: ${({ theme }) => theme.content.background};
  flex-grow: 1;
`;

const Title = styled.h4`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  display: inline-flex;
  width: 2.5rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.content.color};
`;

const ColorInputsStyled = styled.div`
  padding: 0.25rem 1rem 1.25rem;
  width: 100%;
  display: flex;
  align-items: center;
`;
