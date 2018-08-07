import React from 'react';

export interface ButtonIconOnlyStyledProps {
    autoSpacingHorizontal?: boolean,
    format?: 'dark' | 'midDark' | 'alternative' | 'light' | 'primary' | 'warning' | 'lightWarning' | 'lightTransparent',
    size?: 'sm' | 'md'
}

export interface ButtonIconOnlyProps extends ButtonIconOnlyStyledProps {
    icon: React.ReactNode,
    isButtonElement?: boolean,
};