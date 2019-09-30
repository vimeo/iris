import React, { ReactNode } from 'react';
import { CircularButtonStyled } from './CircularButtonStyled';
import { withDeprecateProps } from '../../utils';
import { CircularButtonFocusOutline as FocusOutline } from './CircularButtonFocus';

interface Props {
  element?: 'button' | 'span';
  as?: 'button' | 'span';
  format?:
    | 'lightDashed'
    | 'primary'
    | 'secondary'
    | 'secondaryDashed';
  icon: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const CircularButton = withDeprecateProps<Props>(
  {
    element:
      '`element` is deprecated and will no longer be available in Iris 8. Please use `as="span"`.',
  },
  ({
    element,
    as = 'button',
    format = 'primary',
    icon,
    size = 'md',
    ...props
  }) => {
    if (element) {
      as = element;
    }

    return (
      <CircularButtonStyled
        as={as}
        format={format}
        size={size}
        {...props}
      >
        {icon}
        <FocusOutline />
      </CircularButtonStyled>
    );
  },
);
