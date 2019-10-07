import React, { SFC } from 'react';
import { SegmentedButtonProps } from './SegmentedButtonTypes';
import { SegmentedButtonSetOptionProps } from '../SegmentedButtonSet/SegmentedButtonSetTypes';
import {
  LabelStyled,
  InputStyled,
  OptionStyled,
} from './SegmentedButtonStyled';

export const SegmentedButtonSetButton: SFC<
  SegmentedButtonProps & SegmentedButtonSetOptionProps
> = ({
  children,
  disabled,
  id,
  format = 'light',
  inputProps,
  name,
  optionLabel,
  ...props
}) => (
  <LabelStyled htmlFor={id}>
    {({ ...inputProps }) => (
      <InputStyled
        {...inputProps}
        name={name}
        id={id}
        type="radio"
        disabled={disabled}
      />
    )}
    <OptionStyled
      {...props}
      disabled={disabled}
      format={format}
      size="md"
    >
      {optionLabel}
    </OptionStyled>
  </LabelStyled>
);
