import { MouseEventHandler, ReactElement, ReactNode } from 'react';

import { IrisProps } from '../../utils';

export type Props = IrisProps<{
  /**
   * The Panel's open/close state can be controlled with this prop.
   * If not defined, it will use the internal state.
   */
  active?: boolean;
  /**
   * [default = 'right']
   */
  attach?: 'right' | 'left';
  /**
   * The `content` defines what will appear inside the portal component,
   * whereas the `children` defines what the portal component is anchored to.
   */
  content?: ReactNode;
  children?: ReactElement;
  onClose?: MouseEventHandler;
  onOpen?: MouseEventHandler;
  /**
   * Display a transparent screen over content when Panel is opened.
   *
   * [default = true]
   */
  screen?: boolean;
}>;
