export interface ButtonFileUploadProps {
    autoMargins?: boolean;
    autoWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'fluid';
    className?: string;
    disabled?: boolean;
    format?: 'primary' | 'secondary' | 'secondaryTextOnly';
    id: string;
    isInline?: boolean;
    name?: string;
    label: string;
    showIcon?: boolean;
    size?: 'sm' | 'md';
}
