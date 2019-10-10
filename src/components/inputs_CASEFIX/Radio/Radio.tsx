import React from 'react';

import { InputLabelInline } from '../InputLabelInline/InputLabelInline';
import {
  RadioWrapperStyled,
  RadioStyled,
  RadioOverlayStyled,
} from './RadioStyled';
import { RadioFocusOutline } from './RadioFocus';

import { IrisInputComponent } from '../../../utils';

interface Props {
  defaultValue?: string | string[];
  value?: string | number | string[];
  format?: 'negative' | 'positive' | 'neutral';
  theme?: 'default' | 'dark';
}

export const Radio: IrisInputComponent<Props> = ({
  className,
  disabled,
  format = 'neutral',
  id,
  label,
  theme = 'default',
  ...props
}) => (
  <RadioWrapperStyled theme={theme} className={className}>
    <InputLabelInline
      htmlFor={id}
      format={format}
      disabled={disabled}
      theme={theme}
    >
      <RadioStyled
        {...props}
        type="radio"
        id={id}
        disabled={disabled}
      />

      <RadioOverlayStyled theme={theme}>
        <RadioFocusOutline theme={theme} />
      </RadioOverlayStyled>
      {label}
    </InputLabelInline>
  </RadioWrapperStyled>
);
