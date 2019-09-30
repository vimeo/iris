import React, { SFC, MouseEventHandler } from 'react';
import { DismissX } from '../../icons';
import { ButtonIconOnly } from '../ButtonIconOnly/ButtonIconOnly';
import { BaseProps } from '../../utils';

interface Props extends BaseProps {
  buttonTitle?: string;
  autoSpacingHorizontal?: boolean;
  format?:
    | 'alternative'
    | 'dark'
    | 'lightTransparent'
    | 'lightWarning'
    | 'transparent'
    | 'warning';
  isButtonElement?: boolean;
  size?: 'sm' | 'md';
  onClick?: MouseEventHandler;
  type?: 'button';
}

export const ButtonDialogClose: SFC<Props> = ({
  buttonTitle = 'Close',
  autoSpacingHorizontal = true,
  format = 'dark',
  isButtonElement = true,
  size = 'sm',
  ...props
}) => (
  <ButtonIconOnly
    {...props}
    autoSpacingHorizontal={autoSpacingHorizontal}
    format={format}
    icon={<DismissX />}
    isButtonElement={isButtonElement}
    size={size}
    type="button"
  />
);
