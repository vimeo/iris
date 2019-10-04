import React, { MouseEventHandler, ReactNode } from 'react';

type sizes = 'sm' | 'md' | 'lg' | 'xl';

export interface PopOverProps {
  /**
   * In what direction should the menu panel try to open? Default: center
   */
  alignment?: 'left' | 'right' | 'center';
  /**
   * Color scheme
   */
  theme?: 'light' | 'dark';
  /**
   * Href applies to wrapping anchor tag
   */
  href?: string;
  /**
   * Suppress Outline on wrapping anchor focus
   */
  hideOutline?: boolean;
  /**
   * Control open/close with props
   */
  isShowing?: boolean;
  /**
   * Internal content of menu panel
   */
  menuContent: React.ReactNode;
  /**
   * Callback when the menu closes
   */
  onClose?: () => void;
  /**
   * Callback when the menu opens
   */
  onOpen?: () => void;
  onClick?: MouseEventHandler;
  /**
   * Used to add a class to the panel element
   */
  panelClassName?: string;
  /**
   * Size of the panel
   */
  size: sizes;
  /**
   * Use isFluid if you need to wrap a fullwidth element (e.g. button)
   */
  isFluid?: boolean;
  /**
   * Turn off build in open and close controls, use when the panel is entirely controlled.
   */
  isControlled?: boolean;
  /**
   * Normally we want to refocus on the element that opened the menu panel when the panel closes. Set to false if that is not desired. Defaults to true.
   */
  shouldRefocusTriggerOnClose?: boolean;
  /**
   * Manually set zIndex of the component
   */
  zIndexOverride?: number;
  children?: ReactNode;
  options?: any;
}

export interface PopOverDefaultProps {
  alignment: 'left' | 'right' | 'center';
  href: string;
  theme: 'light' | 'dark';
  size: sizes;
  shouldRefocusTriggerOnClose: boolean;
}

export interface PopOverState {
  isShowing: boolean;
}

export interface PopOverStyledProps {
  theme?: 'light' | 'dark';
  hideOutline?: boolean;
  isShowing?: boolean;
  size: sizes;
  isFluid?: boolean;
  zIndexOverride?: number;
  onClick?: MouseEventHandler;
  children?: ReactNode;
}

export interface TriggerWrapperStyledProps
  extends React.HTMLProps<HTMLAnchorElement> {
  hideOutline?: boolean;
  isFluid?: boolean;
}

export interface WrapperStyledProps {
  isFluid?: boolean;
}

export interface TetherComponentProps {
  attachment?: string;
  targetAttachment?: string;
  constraints?: any;
  enabled?: boolean;
  offset?: string;
}
