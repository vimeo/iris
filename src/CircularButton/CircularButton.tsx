import React from 'react';
import { CircularButtonProps } from './CircularButtonTypes';
import {
    CircularButtonStyled,
} from './CircularButtonStyled';

const CircularButton = ({
    autoMarginsHorizontal = true,
    element = 'button',
    format = 'primary',
    icon,
    size = 'md',
    ...filteredProps
}: CircularButtonProps) => (
    <CircularButtonStyled
        autoMarginsHorizontal={autoMarginsHorizontal}
        element={element}
        format={format}
        size={size}
        {...filteredProps}
    >
        {icon}
    </CircularButtonStyled>
);

export default CircularButton;
