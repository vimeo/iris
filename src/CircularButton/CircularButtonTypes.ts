import React from 'react';

export interface CircularButtonProps {
    autoMarginsHorizontal?: boolean;
    element?: 'button' | 'span';
    format?: 'lightDashed' | 'primary' | 'secondary' | 'secondaryDashed';
    icon: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
}

export interface CircularButtonStyledProps {
    autoMarginsHorizontal?: boolean;
    element: 'button' | 'span';
    format: 'lightDashed' | 'primary' | 'secondary' | 'secondaryDashed';
    size: 'sm' | 'md' | 'lg';
}
