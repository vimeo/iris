import React, { MouseEventHandler } from 'react';
import { BaseProps } from '../Utils/BaseProps';

export interface ButtonProps extends BaseProps {
  as?: 'button' | 'span';
  autoWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'fluid';
  customFormat?: CustomFormatButton;
  format?: buttonFormats;
  icon?: React.ReactNode;
  iconLocation?: 'beforeLabel' | 'afterLabel' | 'featuredLeft';
  isButtonElement?: boolean;
  onClick?: MouseEventHandler;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  size?: buttonSizes;
}

export interface CustomFormatButton {
  defaultBackgroundColor: string;
  defaultBorderColor?: string;
  defaultTextColor: string;
  hoverBackgroundColor: string;
  hoverBorderColor?: string;
  hoverTextColor?: string;
}

export type buttonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type buttonFormats =
  | 'primary'
  | 'primaryDark'
  | 'primaryOutline'
  | 'primaryTextOnly'
  | 'secondary'
  | 'secondaryDark'
  | 'secondaryOutline'
  | 'secondaryTextOnly'
  | 'alternative'
  | 'alternativeOutline'
  | 'darkSecondary'
  | 'success'
  | 'successOutline'
  | 'warning'
  | 'warningOutline'
  | 'warningTextOnly'
  | 'lightTransparent'
  | 'lightTextOnly';
