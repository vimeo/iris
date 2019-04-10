import { ReactNode } from 'react';
import { buttonFormats } from '../Button/ButtonTypes';

export interface ButtonLoadingStateProps {
  format?: buttonFormats;
  icon?: ReactNode;
  isLoading: boolean;
  onClick?: () => void;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}
