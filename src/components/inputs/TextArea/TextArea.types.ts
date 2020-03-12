import { ReactNode } from 'react';
import { IrisInputProps } from '../../../utils';

export type Props = IrisInputProps<{
  disabled?: boolean;
  errorMsg?: ReactNode;
  /**
   * [default = 'neutral']
   */
  format?: 'negative' | 'positive' | 'neutral';
  helperMsg?: ReactNode;
  id?: string;
  /**
   * If defined, the label will appear above the textbox
   */
  label?: string;
  preMessage?: ReactNode;
  /**
   * [default = false]
   */
  showLabel?: boolean;
}>;
