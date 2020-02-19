import { IrisProps } from '../../utils';

export type Props = IrisProps<{
  /**
   * [default = 'primary']
   */
  format?: 'primary' | 'basic' | 'adaptive';
  /**
   * [default = 'md']
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}>;
