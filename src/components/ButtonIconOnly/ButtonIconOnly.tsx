import React, { SFC, ReactNode, MouseEventHandler } from 'react';
import {
  ButtonStyled,
  IconWrapperStyled,
  SpanStyled,
  DEFAULT_BUTTON_FORMAT as DARK,
  ButtonIconOnlyFormats,
} from './ButtonIconOnlyStyled';
import { ButtonIconOnlyFocus } from './ButtonIconOnlyFocus';
import { BaseProps } from '../../utils';

export interface Props extends BaseProps {
  autoSpacingHorizontal?: boolean;
  format?: ButtonIconOnlyFormats;
  icon: ReactNode;
  isButtonElement?: boolean;
  onClick?: MouseEventHandler | ((e?: Event) => void);
  size?: 'sm' | 'md';
  type?: 'button';
}

export const ButtonIconOnly: SFC<Props> = ({
  autoSpacingHorizontal = true,
  format = DARK,
  icon,
  isButtonElement = true,
  size = 'sm',
  ...props
}) => {
  const ButtonElement = isButtonElement ? ButtonStyled : SpanStyled;

  return (
    <ButtonElement
      {...props}
      autoSpacingHorizontal={autoSpacingHorizontal}
      format={format}
      size={size}
    >
      <IconWrapperStyled>{icon}</IconWrapperStyled>
      <ButtonIconOnlyFocus />
    </ButtonElement>
  );
};
