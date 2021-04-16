import { ReactNode, ReactElement, EventHandler } from 'react';

export { Pop } from './PopOver.minors';

import { IrisProps, Attach, AttachAlias } from '../../utils';

export type Props = IrisProps<{
  /**
   * The popover's open/close state can be controlled with this prop.
   * If not defined, it will use the internal state.
   */
  active?: boolean;
  /**
   * [default = 'bottom']
   */
  attach?: Attach | AttachAlias;
  /**
   * The `content` defines what will appear inside the portal component,
   * whereas the `children` defines what the portal component is anchored to.
   */
  content?: ReactNode;
  children: ReactElement;
  onClose?: EventHandler<any>;
  onOpen?: EventHandler<any>;
}>;
