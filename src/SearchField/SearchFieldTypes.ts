import { ButtonProps } from '../Button/ButtonProps';

export interface SearchFieldProps {
    buttonFormat?: 'subtle' | 'neutral' | 'strong';
    buttonLabel: string;
    buttonProps?: ButtonProps;
    fieldLabel: string;
    id: string;
    isInline?: boolean;
    showLabel?: boolean;
    size?: 'md' | 'lg';
}
