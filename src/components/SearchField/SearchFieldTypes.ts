import { ButtonProps } from '../Button/ButtonTypes';
import {
  ReactNode,
  ChangeEventHandler,
  MouseEventHandler,
} from 'react';

export interface SearchFieldProps {
  buttonFormat?: 'subtle' | 'neutral' | 'strong';
  buttonLabel: string;
  buttonProps?: ButtonProps;
  fieldLabel: string;
  icon?: ReactNode;
  id: string;
  onChange?: ChangeEventHandler;
  onClick?: MouseEventHandler;
  showLabel?: boolean;
  size?: 'md' | 'lg';
}
