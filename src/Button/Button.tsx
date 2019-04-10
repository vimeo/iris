import React from 'react';
import { ButtonProps } from './ButtonTypes';
import { ButtonStyled, ButtonLabelStyled } from './ButtonStyled';
import { ButtonFocus } from './ButtonFocus';
import { ButtonIconElement } from './ButtonIconElement';
import { withDeprecateProps } from '../Utils/Deprecated';

export const Button = withDeprecateProps<ButtonProps>(
  {
    customFormat:
      '`customFormat` is deprecated and will no longer be available in Iris 8.',
    isButtonElement:
      '`isButtonElement` is deprecated and will no longer be available in Iris 8. Please use `as="span"`.',
  },
  ({
    as = 'button',
    autoWidth = 'sm',
    children,
    format = 'primary',
    icon,
    iconLocation = 'beforeLabel',
    isButtonElement,
    size = 'md',
    ...props
  }) => {
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
