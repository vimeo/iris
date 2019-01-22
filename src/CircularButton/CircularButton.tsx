import React, { SFC } from 'react';
import { CircularButtonProps } from './CircularButtonTypes';
import { CircularButtonStyled } from './CircularButtonStyled';

export const CircularButton: SFC<CircularButtonProps> = ({
    autoMarginsHorizontal = true,
    element = 'button',
    format = 'primary',
    icon,
    size = 'md',
    ...props
}) => (
    <CircularButtonStyled
        autoMarginsHorizontal={autoMarginsHorizontal}
        element={element}
        format={format}
        size={size}
        {...props}
    >
        {icon}
    </CircularButtonStyled>
);
