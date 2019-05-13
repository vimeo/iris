import React, { SFC } from 'react';
import { InputProps } from '../InputText/InputHelpers';
import { SelectWrapper } from '../SelectWrapper/SelectWrapper';
import { StyledSelect } from './InputSelectStyled';

export interface InputSelectProps extends InputProps {
  icon?: React.ReactNode;
  options?: { label: string; value: string }[];
}

export const InputSelect: SFC<InputSelectProps> = ({
  children,
  className,
  disabled,
  errorMsg,
  format = 'neutral',
  helperMsg,
  icon,
  id,
  label,
  options,
  showLabel = true,
  size = 'md',
  theme = 'default',
  ...props
}) => (
  <SelectWrapper
    className={className}
    disabled={disabled}
    errorMsg={errorMsg}
    format={format}
    helperMsg={helperMsg}
    icon={icon}
    id={id}
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
