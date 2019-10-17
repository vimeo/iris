import { IrisInputProps, Messages } from '../../../utils';
import { ReactNode } from 'react';

export type Props = IrisInputProps<{
  autocomplete?: boolean;
  floating?: boolean;
  inlineButton?: ReactNode;
  messages?: Messages;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'negative' | 'positive';
}>;
