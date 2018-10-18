import { ReactNode } from 'react';
import { TooltipOverlayProps } from '../TooltipOverlay/TooltipOverlay';

export interface ButtonInlineInputTextProps {
    icon: ReactNode;
    format?: 'subtle' | 'neutral' | 'strong';
    size: 'md' | 'lg';
    tooltipText?: string;
    tooltipPosition?: 'top' | 'right' | 'bottom' | 'left';
    tooltipProps?: TooltipOverlayProps;
}

export interface ButtonInlineInputTextStyleProps {
    format: 'subtle' | 'neutral' | 'strong';
    size: 'md' | 'lg';
}
