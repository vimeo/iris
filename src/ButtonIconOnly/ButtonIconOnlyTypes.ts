import React from 'react';

export interface ButtonIconOnlyStyledProps {
    autoSpacingHorizontal?: boolean;
    format?:
        | 'alternative'
        | 'dark'
        | 'lightTransparent'
        | 'lightWarning'
        | 'midDark'
        | 'primary'
        | 'transparent'
        | 'warning';
    size?: 'sm' | 'md';
}

export interface ButtonIconOnlyProps extends ButtonIconOnlyStyledProps {
    icon: React.ReactNode;
    isButtonElement?: boolean;
}
