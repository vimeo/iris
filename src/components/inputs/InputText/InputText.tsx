import React, { SFC } from 'react';
import styled from 'styled-components';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import {
  getInputBaseStyles,
  InputProps,
  InputStyledProps,
} from './InputHelpers';

export interface InputTextProps {
  value?: string | number | string[];
  defaultValue?: string | string[];
  inlineButton?: React.ReactNode;
  placeholder?: string;
  type?:
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'url';
  messages?: any;
}

export interface InputTextStyledProps extends InputStyledProps {
  inlineButton?: React.ReactNode;
}

const InputStyled = styled.input<InputTextStyledProps>`
  ${getInputBaseStyles};
`;

export const InputText: SFC<InputTextProps & InputProps> = ({
  disabled,
  errorMsg,
  format = 'neutral',
  helperMsg,
  inlineButton,
  label,
  id,
  preMessage,
  autocomplete = true,
  showLabel = true,
  theme = 'light',
  size = 'md',
  type = 'text',
  messages,
  ...filteredProps
}) => {
  const isNegative = format === 'negative';
  const ariaInvalid = isNegative;
  const hasIcon = isNegative || format === 'positive';
  // support deprecated 'default' theme as 'light'
  const themeDefaultSupport = theme === 'default' ? 'light' : theme;
  // Protect against invalid props that are needed for style look up.

  if (messages && messages.pre) preMessage = messages.pre;
  if (messages && messages.post) preMessage = messages.post; // ¯\_(ツ)_/¯
  if (messages && messages.help) helperMsg = messages.help;
  if (messages && messages.error) errorMsg = messages.error;

  return (
    <InputWrapper
      showLabel={showLabel}
      disabled={disabled}
      errorMsg={errorMsg}
      format={format}
      helperMsg={helperMsg}
      label={label}
      labelForId={id}
      preMessage={preMessage}
      size={size}
      theme={themeDefaultSupport}
    >
      <InputStyled
        {...filteredProps}
        aria-invalid={ariaInvalid}
        disabled={disabled}
        format={format}
        hasIcon={hasIcon}
        id={id}
        inlineButton={inlineButton}
        inputSize={size}
        theme={theme}
        type={type}
        autoComplete={autocomplete ? 'on' : 'off'}
      />
      {inlineButton}
    </InputWrapper>
  );
};
