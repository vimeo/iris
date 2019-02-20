import { ButtonProps } from '../Button/ButtonProps';
import { ReactNode } from 'react';

export interface SearchFieldProps {
  buttonFormat?: 'subtle' | 'neutral' | 'strong';
  buttonLabel: string;
  buttonProps?: ButtonProps;
  fieldLabel: string;
  icon?: ReactNode;
  id: string;
  showLabel?: boolean;
  size?: 'md' | 'lg';
}
