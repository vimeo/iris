import React, { forwardRef, Ref } from 'react';

import { ButtonProps } from './ButtonTypes';
import { ButtonStyled, ButtonLabelStyled } from './ButtonStyled';
import { ButtonFocus } from './ButtonFocus';
import { ButtonIconElement } from './ButtonIconElement';

export const Button = forwardRef(
  (
    {
      as = 'button',
      autoWidth = 'sm',
      children,
      format = 'primary',
      icon,
      iconLocation = 'beforeLabel',
      isButtonElement,
      size = 'md',
      ...props
    }: ButtonProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    const hasIcon = position =>
      icon &&
      iconLocation === position && (
        <ButtonIconElement size={size} iconLocation={iconLocation}>
          {icon}
        </ButtonIconElement>
      );

    if (isButtonElement === false) {
      as = 'span';
    }

    return (
      <ButtonStyled
        as={as}
        autoWidth={autoWidth}
        format={format}
        title={children as string}
        hasFeaturedIcon={iconLocation === 'featuredLeft'}
        size={size}
        ref={ref}
        {...props}
      >
        {hasIcon('featuredLeft')}

        <ButtonLabelStyled>
          {hasIcon('beforeLabel')}
          {children}
          {hasIcon('afterLabel')}
        </ButtonLabelStyled>

        <ButtonFocus theme={convertTheme(format)} size={size} />
      </ButtonStyled>
    );
  },
);

const darkThemeFormats = ['primary', 'primaryDark', 'secondaryDark'];

const convertTheme = format =>
  darkThemeFormats.indexOf(format) !== -1 ? 'default' : 'dark';
