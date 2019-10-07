import { BaseProps } from '../../../utils';

export interface ButtonFileUploadProps extends BaseProps {
  autoWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'fluid';
  format?: 'primary' | 'secondary' | 'secondaryTextOnly';
  name?: string;
  label: string;
  showIcon?: boolean;
  size?: 'sm' | 'md';
}
