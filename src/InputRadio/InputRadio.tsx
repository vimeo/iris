import React, { SFC, ReactNode, MouseEventHandler } from 'react';
import { InputLabelInline } from '../InputLabelInline/InputLabelInline';
import {
  InputRadioWrapperStyled,
  InputRadioStyled,
  InputRadioOverlayStyled,
} from './InputRadioStyled';
import { RadioFocusOutline } from './InputRadioFocus';

interface Props {
  disabled?: boolean;
  format?: 'negative' | 'positive' | 'neutral';
  id: string;
  label: ReactNode;
  theme?: 'default' | 'dark';
  name?: string;
  onClick?: MouseEventHandler;
  checked?: boolean;
  readOnly?: boolean;
}

export const InputRadio: SFC<Props> = ({
  disabled,
  format = 'neutral',
  id,
  label,
  theme = 'default',
  ...props
}) => (
  <InputRadioWrapperStyled theme={theme}>
    <InputLabelInline
      htmlFor={id}
      format={format}
      disabled={disabled}
      theme={theme}
    >
      <InputRadioStyled
        {...props}
        type="radio"
        id={id}
        disabled={disabled}
      />

      <InputRadioOverlayStyled theme={theme}>
        <RadioFocusOutline theme={theme} />
      </InputRadioOverlayStyled>
      {label}
    </InputLabelInline>
  </InputRadioWrapperStyled>
);
