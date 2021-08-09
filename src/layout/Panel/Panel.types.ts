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
  /**
   * Max width the sidenav can be expanded to.
   * [default = 600]
   */
  maxWidth?: number;
  /**
   * Min width the sidenav can be reduced to.
   * [default = 256]
   */
  minWidth?: number;
  /**
   * Function called when user beings dragging.
   */
  onDragBegin?: () => void;
  /**
   * Function called when user finishes dragging.
   */
  onDragEnd?: () => void;
  onClose?: MouseEventHandler;
  onOpen?: MouseEventHandler;
  /**
   * Function that gets called when the size of the panel changes.
   */
  onResize?: (size: number) => void;
  /**
   * Whether or not the panel can be dragged to resize it.
   * [default = false]
   */
  resizable?: boolean;
  /**
   * Display a transparent screen over content when Panel is opened.
   *
   * [default = true]
   */
  screen?: boolean;
}>;
