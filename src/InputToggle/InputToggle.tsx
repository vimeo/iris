import React, { ReactNode, SFC } from 'react';
import { InputWrapperInline } from '../InputWrapperInline/InputWrapperInline';
import {
  ToggleWrapper,
  ToggleLabel,
  Input,
  ToggleOverlay,
} from './InputToggleStyled';
import { InputToggleFocusOutline as FocusOutline } from './InputToggleFocus';

interface Props {
  disabled?: boolean;
  errorMsg?: ReactNode;
  format?: 'negative' | 'positive' | 'neutral';
  helperMsg?: ReactNode;
  hideLabel?: boolean;
  id: string;
  label: string | ReactNode;
  size?: 'md' | 'lg';
  theme?: 'default' | 'dark';
  name?: string;
  value: string;
  required?: boolean;
}

export const InputToggle: SFC<Props> = ({
  disabled,
  errorMsg,
  format = 'neutral',
  helperMsg,
  hideLabel,
  id,
  label,
  size = 'md',
  theme = 'default',
  ...props
}) => (
  <InputWrapperInline
    errorMsg={errorMsg}
    helperMsg={helperMsg}
    theme={theme}
  >
    <ToggleWrapper disabled={disabled} size={size}>
      <ToggleLabel
        htmlFor={id}
        format={format}
        disabled={disabled}
        hideLabel={hideLabel}
        theme={theme}
      >
        <Input
          type="checkbox"
          id={id}
          {...props}
          disabled={disabled}
        />
        <ToggleOverlay size={size} theme={theme}>
          <FocusOutline />
        </ToggleOverlay>

        {!hideLabel && <span>{label}</span>}
      </ToggleLabel>
    </ToggleWrapper>
  </InputWrapperInline>
);
