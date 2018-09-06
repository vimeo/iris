import React from 'react';

export interface InputCheckboxProps {
    checkedStyle?: 'default' | 'indeterminate';
    disabled?: boolean;
    /**
     * Error message to display below checkbox
     */
    errorMsg?: React.ReactNode; // string ???
    format?: 'negative' | 'positive' | 'neutral';
    helperMsg?: React.ReactNode; // string ???
    id: string;
    label: string | React.ReactNode;
    hideLabel?: boolean;
    theme?: 'default' | 'dark';
}

export interface InputCheckboxOverlayStyledProps {
    checkedStyle?: 'default' | 'indeterminate';
    theme?: 'default' | 'dark';
}

export interface InputCheckboxHiddenLabelStyledProps {
    hideLabel?: boolean;
}
