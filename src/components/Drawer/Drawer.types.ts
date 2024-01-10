import React, { HTMLProps } from 'react';
import { IrisProps, MinorComponent } from '../../utils';

export type DrawerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface FocusableElement {
  focus(options?: FocusOptions): void;
}

export type DrawerProps = IrisProps<{
  /**
   * Whether the drawer is visible or not
   *
   * @default false
   */
  isOpen: boolean;
  /**
   * The placement of the drawer
   *
   * @default "left"
   */
  placement?: 'left' | 'right';
  /**
   * Width of the drawer
   *
   * @default "md"
   */
  size?: DrawerSize;
  /**
   * If `true`, the modal will autofocus the first enabled and interactive
   * element within the `ModalContent`
   *
   * @default true
   */
  autoFocus?: boolean;
  /**
   * The `ref` of element to receive focus when the modal opens.
   */
  initialFocusRef?: React.RefObject<FocusableElement>;
  /**
   * The `ref` of element to receive focus when the modal closes.
   */
  finalFocusRef?: React.RefObject<FocusableElement>;
  /**
   * If `true`, the modal will return focus to the element that triggered it when it closes.
   *
   * @default true
   */
  returnFocusOnClose?: boolean;
  /**
   * If `true`, a `padding-right` will be applied to the body element
   * that's equal to the width of the scrollbar.
   *
   * This can help prevent some unpleasant flickering effect
   * and content adjustment when the modal opens
   *
   * @default true
   */
  preserveScrollBarGap?: boolean;
}>;

export interface Minors {
  DrawerHeader: MinorComponent<HTMLProps<HTMLHeadingElement>>;
  DrawerContent: MinorComponent<HTMLProps<HTMLDivElement>>;
  DrawerBody: MinorComponent<HTMLProps<HTMLDivElement>>;
  DrawerFooter: MinorComponent<HTMLProps<HTMLDivElement>>;
  DrawerOverlay: MinorComponent<HTMLProps<HTMLDivElement>>;
  DrawerCloseButton: MinorComponent<HTMLProps<HTMLButtonElement>>;
}
