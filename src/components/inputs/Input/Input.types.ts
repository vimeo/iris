import { IrisInputProps, Messages } from '../../../utils';
import { ReactNode } from 'react';

export type Props = IrisInputProps<{
  autocomplete?: boolean | 'on' | 'off';
  floating?: boolean;
  indeterminate?: boolean;
  inlineButton?: ReactNode;
  messages?: Messages;
  pill?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'negative' | 'positive' | 'neutral';
  variant?: 'underline';
  autosuggest?: string[];
}>;
