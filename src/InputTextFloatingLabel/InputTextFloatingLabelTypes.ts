import { ReactNode } from 'react';

export interface InputTextFloatingLabelProps {
    defaultValue?: string;
    disabled?: boolean;
    errorMsg?: ReactNode;
    format?: 'negative' | 'positive' | 'neutral';
    helperMsg?: ReactNode;
    isInline?: boolean;
    label: ReactNode;
    id: string;
    onBlur?: (e?: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e?: React.FocusEvent<HTMLInputElement>) => void;
    onPasswordToggleClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    passwordHideText?: string;
    passwordShowText?: string;
    preMessage?: any;
    theme?: 'default' | 'dark';
    tooltipProps?: Object;
    type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';
    value?: string;
}

export interface InputTextFloatingLabelState {
    isActive?: boolean;
    isFocused?: boolean;
    passwordHidden?: boolean;
    type?: string;
}
