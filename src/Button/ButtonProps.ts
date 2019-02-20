import React, { MouseEventHandler } from 'react';
import { BaseProps } from '../Utils/BaseProps';

export interface ButtonProps extends BaseProps {
  /**
   * At what breakpoint should the button go to `width: auto`?
   */
  autoWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'fluid';
  /**
   * For custom color themes, specify color strings (any valid css color value) for the background and text color for default and hover states.
   *  *`hoverTextColor` is optional and falls back to `defaultTextColor`
   *  *`hoverBorderColor`  and `defaultBorderColor` are optional and fall back to background color pairings
   */
  customFormat?: CustomFormatButton;
  /**
   * Chooses the color theme
   */
  format?: buttonFormats;
  /**
   * This should be an SVG loaded through SVG loader.
   */
  icon?: React.ReactNode;
  /**
   * Choose icon location (default: beforeLabel)
   */
  iconLocation?: 'beforeLabel' | 'afterLabel' | 'featuredLeft';
  /**
   * If `false` the button will be rendered as a span tag
   */
  isButtonElement?: boolean;
  /**
   * Choose the button size
   */
  size?: buttonSizes;
  onClick?: MouseEventHandler;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
}

export interface ButtonStyledProps {
  hasFeaturedIcon?: boolean;
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
