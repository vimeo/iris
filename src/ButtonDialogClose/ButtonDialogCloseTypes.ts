export interface ButtonDialogCloseProps {
    buttonTitle?: string;
    autoSpacingHorizontal?: boolean;
    className?: string;
    format?:
        | 'alternative'
        | 'dark'
        | 'lightTransparent'
        | 'lightWarning'
        | 'transparent'
        | 'warning';
    isButtonElement?: boolean;
    size?: 'sm' | 'md';
}
