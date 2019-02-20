import React, { SFC } from 'react';
import { CircularButtonProps } from './CircularButtonTypes';
import { CircularButtonStyled } from './CircularButtonStyled';

export const CircularButton: SFC<CircularButtonProps> = ({
  element = 'button',
  format = 'primary',
  icon,
  size = 'md',
  ...props
}) => (
  <CircularButtonStyled
    element={element}
    format={format}
    size={size}
    {...props}
  >
    {icon}
  </CircularButtonStyled>
);
