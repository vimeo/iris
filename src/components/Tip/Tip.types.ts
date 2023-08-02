import { ReactNode, ReactElement } from 'react';

import { IrisProps, Attach, AttachAlias } from '../../utils';

export type Props = IrisProps<{
  /**
   * The tip's open/close state can be controlled with this prop.
   * If not defined, it will use the internal state.
   */
  active?: boolean;
  /**
   * Controls the tooltip visibility.
   * If false the tooltip will be disabled - hidden, else it will be enabled - visible.
   */
  disabled?: boolean;
  /**
   * Position where tooltip appears.
   * Can be a string or a set of coordinates, such as [[0,0], [100,100]].
   *
   * [default = 'top']
   */
  attach?: Attach | AttachAlias;
  /**
   * Whether to break words in tooltip when deciding new line
   *
   * [default = false]
   */
  breakWords?: boolean;
  children: ReactElement | string;
  /**
   * The `content` defines what will appear inside the portal component,
   * whereas the `children` defines what the portal component is anchored to.
   */
  content?: ReactNode;
  /**
   * The action that triggers the tooltip
   *
   * [default = 'hover']
   */
  trigger?: 'click' | 'hover';
  /**
   * Specifies rounded corners on the tip.
   *
   * [default = 'false']
   */
  pill?: boolean;
  /**
   * [default = 'simple']
   */
  variant?: 'simple' | 'speech-bubble';
}>;
