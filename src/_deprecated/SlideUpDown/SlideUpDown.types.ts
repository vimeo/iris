import { IrisProps } from '../../utils';
import { ReactNode } from 'react';

export type Props = IrisProps<{
  /**
   * Should component be automatically open on inital mount.
   *
   * [default = false]
   */
  automatic?: boolean;
  children: ReactNode;
  /**
   * Whether the children are visible
   */
  showing: boolean;
}>;
