import React, { ReactNode, SFC } from 'react';
import { InputWrapperInline } from '../InputWrapperInline/InputWrapperInline';
import {
  ToggleWrapper,
  ToggleLabel,
  Input,
  ToggleOverlay,
} from './ToggleStyled';
import { ToggleFocusOutline as FocusOutline } from './ToggleFocus';

interface Props {
  checked?: boolean;
  className?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  errorMsg?: ReactNode;
  format?: 'negative' | 'positive' | 'neutral';
  helperMsg?: ReactNode;
  hideLabel?: boolean;
  id: string;
  label: string | ReactNode;
  name?: string;
  required?: boolean;
  size?: 'md' | 'lg';
  theme?: 'default' | 'dark';
  value: string;
}

export const Toggle: SFC<Props> = ({
  className,
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
    className={className}
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
