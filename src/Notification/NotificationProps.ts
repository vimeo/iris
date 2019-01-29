import { ReactNode } from 'react';

export interface NotificationProps {
  hasIcon?: boolean;
  headerText?: string;
  dismissButtonClassName?: string;
  onDismiss?: () => void;
  icon?: ReactNode;
  variant: 'neutral' | 'success' | 'warning';
}
