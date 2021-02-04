import { ChangeEvent, ReactNode } from 'react';
import { IrisInputProps } from '../../../utils';

export type DropChangeEvent = ChangeEvent<HTMLInputElement> & {
  dataTransfer?: DataTransfer;
};

export type Props = IrisInputProps<{
  /**
   * Dropzone `children` can be a `ReactNode` or a function that
   * accepts boolean `active` and returns a `ReactNode`.
   *
   * `(active: boolean) => ReactNode`
   *
   * This render props pattern is used to access the dragging state
   * in the children. One example use case is custom styles.
   */
  children: ReactNode | ((active: boolean) => ReactNode);
  /**
   * [default = 'primary']
   */
  format?: 'primary' | 'secondary';
  onChange?: (event: DropChangeEvent) => void;
}>;
