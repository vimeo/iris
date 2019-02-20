import { CSSProperties, ReactNode } from 'react';

export interface BaseProps {
  alt?: string;
  className?: string;
  children?: ReactNode;
  data?: string;
  disabled?: boolean;
  hidden?: boolean;
  id?: string;
  style?: CSSProperties;
}
