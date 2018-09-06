import React from 'react';

export interface FieldSetProps {
    errorMsg?: React.ReactNode;
    format?: 'negative' | 'positive' | 'neutral';
    helperMsg?: React.ReactNode;
    label: string | React.ReactNode;
    theme?: 'default' | 'dark';
}
