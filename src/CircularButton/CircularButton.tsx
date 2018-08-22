import React, { SFC } from 'react';
import { CircularButtonProps } from './CircularButtonTypes';
import {
    CircularButtonStyled,
} from './CircularButtonStyled';

const CircularButton: SFC<CircularButtonProps> = ({
    autoMarginsHorizontal = true,
    element = 'button',
    format = 'primary',
    icon,
    size = 'md',
    ...filteredProps
}) => (
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
