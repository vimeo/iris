import { ReactNode } from 'react';

export interface PopOverListItemThemes {
  theme?: 'light' | 'dark';
}

export interface PopOverListItemProps extends PopOverListItemThemes {
  className?: string;
  label: string;
  href?: string;
  linkElement?: any;
  isSelected?: boolean;
  icon?: ReactNode;
  'aria-label': string;
}
