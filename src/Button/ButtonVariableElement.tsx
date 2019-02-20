import React, { SFC } from 'react';
import { ButtonProps, ButtonStyledProps } from './ButtonProps';

export const ButtonVariableElement: SFC<
  ButtonProps & ButtonStyledProps
> = ({
  autoWidth,
  customFormat,
  hasFeaturedIcon,
  isButtonElement,
  ...props
}) => (isButtonElement ? <button {...props} /> : <span {...props} />);
