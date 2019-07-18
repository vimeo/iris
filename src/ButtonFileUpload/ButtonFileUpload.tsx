import React, { SFC } from 'react';
import { UploadCloud } from '../Icons';
import { ButtonFileUploadWrapper } from '../ButtonFileUploadWrapper/ButtonFileUploadWrapper';
import { ButtonFileUploadProps as Props } from './ButtonFileUploadTypes';
import { LabelStyled, IconWrapper } from './ButtonFileUploadStyled';
import { ButtonFileUploadFocusOutline as FocusOutline } from './ButtonFileUploadFocus';

export const ButtonFileUpload: SFC<Props> = ({
  autoWidth = 'sm',
  className,
  disabled,
  format = 'primary',
  id,
  label,
  name,
  showIcon = true,
  size = 'md',
  ...props
}) => (
  <ButtonFileUploadWrapper
    className={className}
    id={id}
    name={name}
    inputElementProps={props}
  >
    <LabelStyled
      disabled={disabled}
      format={format}
      htmlFor={id}
      size={size}
    >
      {showIcon && (
        <IconWrapper size={size}>
          <UploadCloud />
        </IconWrapper>
      )}
      {label}
      {!disabled && <FocusOutline />}
    </LabelStyled>
  </ButtonFileUploadWrapper>
);
