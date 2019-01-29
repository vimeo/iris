import React, { SFC } from 'react';
import { Omit } from '../Utils/Omit';
import { InputProps } from '../InputText/InputHelpers';
import { SelectWrapper } from '../SelectWrapper/SelectWrapper';
import { StyledSelect } from './InputSelectStyled';

export interface InputSelectProps
  extends InputProps,
    Omit<
      React.HTMLProps<HTMLSelectElement>,
      'label' | 'size' | 'id'
    > {
  icon?: React.ReactNode;
  options?: Array<{ label: string; value: string }>;
}

export const InputSelect: SFC<InputSelectProps> = ({
  children,
  disabled,
  errorMsg,
  format = 'neutral',
  helperMsg,
  icon,
  id,
  isInline,
  label,
  options,
  showLabel = true,
  size = 'md',
  theme = 'default',
  ref: _,
  ...props
}) => (
  <SelectWrapper
    disabled={disabled}
    errorMsg={errorMsg}
    format={format}
    helperMsg={helperMsg}
    icon={icon}
    id={id}
    isInline={isInline}
    label={label}
    showLabel={showLabel}
    size={size}
    theme={theme}
  >
    <StyledSelect
      {...props}
      aria-label={!showLabel && (label as string)}
      aria-invalid={format === 'negative'}
      disabled={disabled}
      hasIcon={format !== 'neutral'}
      hasInlineIcon={icon ? true : false}
      id={id}
      format={format}
      inputSize={size}
      theme={theme === 'dark' ? theme : 'light'}
    >
      {options
        ? options.map(({ label, ...optionProps }, i) => (
            <option {...optionProps} key={i}>
              {label}
            </option>
          ))
        : children}
    </StyledSelect>
  </SelectWrapper>
);
