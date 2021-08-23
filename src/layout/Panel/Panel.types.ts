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
   * Max width the sidenav can be dragged to.
   * [default = 600]
   */
  maxDragWidth?: number;
  /**
   * Min width the sidenav can be dragged to.
   * [default = 256]
   */
  minDragWidth?: number;
  /**
   * Function called when user beings dragging.
   */
  onDragStart?: MouseEventHandler;
  /**
   * Function called when user finishes dragging.
   */
  onDragEnd?: MouseEventHandler;
  /**
   * Function that gets called when the size of the panel changes.
   */
  onResize?: (event: MouseEvent, { width }: Resize) => void;
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

type Resize = { width: number };
