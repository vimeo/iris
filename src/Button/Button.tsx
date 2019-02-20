import React, { SFC } from 'react';
import { ButtonProps } from './ButtonProps';
import { ButtonStyled, ButtonLabelStyled } from './ButtonStyled';
import { ButtonFocus } from './ButtonFocus';
import { ButtonIconElement } from './ButtonIconElement';

export const Button: SFC<ButtonProps> = ({
  autoWidth = 'sm',
  children,
  format = 'primary',
  icon,
  iconLocation = 'beforeLabel',
  isButtonElement = true,
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

  return (
    <ButtonStyled
      autoWidth={autoWidth}
      format={format}
      title={children as string}
      hasFeaturedIcon={iconLocation === 'featuredLeft'}
      isButtonElement={isButtonElement}
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
};

const darkThemeFormats = ['primary', 'primaryDark', 'secondaryDark'];

const convertTheme = format =>
  darkThemeFormats.indexOf(format) !== -1 ? 'default' : 'dark';
