export interface ButtonDialogCloseProps {
    buttonTitle?: string;
    autoSpacingHorizontal?: boolean;
    className?: string;
    format?:
        | 'dark'
        | 'alternative'
        | 'light'
        | 'warning'
        | 'lightWarning'
        | 'lightTransparent';
    isButtonElement?: boolean;
    size?: 'sm' | 'md';
}
