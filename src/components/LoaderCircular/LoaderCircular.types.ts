import { IrisProps } from '../../utils';
import { Sizes } from '../../themes';

export type Props = IrisProps<{
  /**
   * [default = 'primary']
   */
  format?: 'primary' | 'basic' | 'adaptive';
  /**
   * [default = 'md']
   */
  size?: Sizes;
}>;
