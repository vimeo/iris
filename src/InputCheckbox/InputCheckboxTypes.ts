import { MouseEventHandler, ReactNode } from 'react';

export interface InputCheckboxProps {
  checkedStyle?: 'default' | 'indeterminate';
  disabled?: boolean;
  errorMsg?: ReactNode;
  format?: 'negative' | 'positive' | 'neutral';
  helperMsg?: ReactNode;
  id: string;
  label: ReactNode;
  hideLabel?: boolean;
  theme?: 'default' | 'dark';
  onClick?: MouseEventHandler;
  readOnly?: boolean;
}

export interface InputCheckboxOverlayStyledProps {
  checkedStyle?: 'default' | 'indeterminate';
  theme?: 'default' | 'dark';
}

export interface InputCheckboxHiddenLabelStyledProps {
  hideLabel?: boolean;
}
