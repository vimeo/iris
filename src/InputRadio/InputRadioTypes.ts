import { ReactNode } from 'react';


export interface InputRadioProps {
    disabled?: boolean;
    format?: 'negative' | 'positive' | 'neutral';
    id: string;
    label: string | ReactNode;
    theme?: 'default' | 'dark';
};

export type InputRadioOverlayStyledProps = {
    theme?: 'default' | 'dark'
};