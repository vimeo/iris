import React from 'react';

export interface CircularButtonProps {
  element?: 'button' | 'span';
  format?:
    | 'lightDashed'
    | 'primary'
    | 'secondary'
    | 'secondaryDashed';
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export interface CircularButtonStyledProps {
  element: 'button' | 'span';
  format: 'lightDashed' | 'primary' | 'secondary' | 'secondaryDashed';
  size: 'sm' | 'md' | 'lg';
}
