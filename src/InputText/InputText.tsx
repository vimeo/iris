import React, { SFC, HTMLProps } from 'react';
import styled from 'styled-components';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import {
  getInputBaseStyles,
  InputProps,
  InputStyledProps,
} from './InputHelpers';
import { Omit } from '../Utils/Omit';

export interface InputTextProps {
  inlineButton?: React.ReactNode;
  type?:
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'url';
}

export interface InputTextStyledProps extends InputStyledProps {
  inlineButton?: React.ReactNode;
}

const InputStyled = styled<InputTextStyledProps, 'input'>('input')`
  ${getInputBaseStyles};
`;

export const InputText: SFC<
  InputTextProps &
    InputProps &
    Omit<HTMLProps<HTMLInputElement>, 'label' | 'size' | 'id'>
> = ({
  disabled,
  errorMsg,
  format = 'neutral',
  isInline,
  helperMsg,
  inlineButton,
  label,
  id,
  preMessage,
  showLabel = true,
  theme = 'light',
  size = 'md',
  type = 'text',
  ref: _,
  ...filteredProps
}) => {
  const isNegative = format === 'negative';
  const ariaInvalid = isNegative;
  const hasIcon = isNegative || format === 'positive';
  // support deprecated 'default' theme as 'light'
  const themeDefaultSupport = theme === 'default' ? 'light' : theme;
  // Protect against invalid props that are needed for style look up.

  return (
    <InputWrapper
      showLabel={showLabel}
      disabled={disabled}
      errorMsg={errorMsg}
      format={format}
      helperMsg={helperMsg}
      label={label}
      labelForId={id}
      isInline={isInline}
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
        isInline={isInline}
        inputSize={size}
        theme={theme}
        type={type}
      />
      {inlineButton}
    </InputWrapper>
  );
};
