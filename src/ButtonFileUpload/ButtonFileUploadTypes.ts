export interface ButtonFileUploadProps {
  autoWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'fluid';
  className?: string;
  disabled?: boolean;
  format?: 'primary' | 'secondary' | 'secondaryTextOnly';
  id: string;
  name?: string;
  label: string;
  showIcon?: boolean;
  size?: 'sm' | 'md';
}
