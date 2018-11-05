import React from 'react';
import { BUTTON_FORMATS } from './ButtonIconOnlyStyled';

export type ButtonIconOnlyFormats = keyof typeof BUTTON_FORMATS;

export interface ButtonIconOnlyStyledProps {
    autoSpacingHorizontal?: boolean;
    format?: ButtonIconOnlyFormats;
    size?: 'sm' | 'md';
}

export interface ButtonIconOnlyProps extends ButtonIconOnlyStyledProps {
    icon: React.ReactNode;
    isButtonElement?: boolean;
}
