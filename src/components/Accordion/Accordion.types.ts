import React, { ReactNode } from 'react';
import { IrisProps } from '../../utils';

export type Props = IrisProps<
  {
    children: any;
    /**
     * Whether the accordion will permit multiple accordion items to be expanded at once
     *
     * [default = true]
     */
    allowMultiple?: boolean;
    /**
     * Index of the accordion item that should start as open/active
     */
    defaultIndex?: number;
    /**
     * [default = 'basic']
     */
    format?: 'basic' | 'secondary';
  },
  HTMLDivElement
>;

export type AccordionItemProps = IrisProps<{
  children: React.ReactElement;
  format: 'basic' | 'secondary';
  index: number;
  allowMultiple: boolean;
  defaultActive: boolean;
  setActiveIndex: ({ index }) => void;
  itemActive: boolean;
  /**
   * Header title
   */
  title: string;
  /**
   * Optional header subcopy
   */
  subcopy?: string;
  /**
   * Optional header icon
   */
  icon?: ReactNode;
  /**
   * Optional icon to be displayed when `hasError` is true
   *
   * [default = `CircleWarning`]
   */
  errorIcon?: ReactNode;
  /**
   * Optional icon to open accordion item
   *
   * [default = `ChevronDown`]
   */
  iconToTriggerOpen?: ReactNode;
  /**
   * Optional icon to close accordion item
   *
   * [default = `ChevronUp`]
   */
  iconToTriggerClose?: ReactNode;
  /**
   * Whether to show the accordion item's error state
   *
   * [default = false]
   */
  hasError?: boolean;
  /**
   * Whether to show the accordion item's disabled state
   *
   * [default = false]
   */
  disabled?: boolean;
}>;
