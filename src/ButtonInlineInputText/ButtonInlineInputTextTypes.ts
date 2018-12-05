import { ReactNode } from 'react';

export interface ButtonInlineInputTextProps {
    icon: ReactNode;
    format?: 'subtle' | 'neutral' | 'strong';
    size: 'md' | 'lg';
    tooltipText?: string;
    tooltipPosition?: 'top' | 'right' | 'bottom' | 'left';
    // tooltipProps?: TooltipOverlayProps;
    tooltipProps?: any;
}

export interface ButtonInlineInputTextStyleProps {
    format: 'subtle' | 'neutral' | 'strong';
    size: 'md' | 'lg';
}
