import React from 'react';
import { InputLabelInline } from '../InputLabelInline/InputLabelInline';
import {
  InputRadioWrapperStyled,
  InputRadioStyled,
  InputRadioOverlayStyled,
} from './InputRadioStyled';
import { RadioFocusOutline } from './InputRadioFocus';
import { IrisInputComponent } from '../Utils/IrisInputComponent';

interface Props {
  defaultValue?: string | string[];
  value?: string | number | string[];
  format?: 'negative' | 'positive' | 'neutral';
  theme?: 'default' | 'dark';
}

export const InputRadio: IrisInputComponent<Props> = ({
  className,
  disabled,
  format = 'neutral',
  id,
  label,
  theme = 'default',
  ...props
}) => (
  <InputRadioWrapperStyled theme={theme} className={className}>
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
