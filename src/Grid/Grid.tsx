import React, { SFC } from 'react';
import { GridProps } from './GridTypes';
import { GridStyled } from './GridStyled';

export const Grid: SFC<GridProps> = ({
    centered = false,
    element = 'main',
    hasMaxWidth = true,
    ...filteredProps
}) => (
    <GridStyled
        centered={centered}
        element={element}
        hasMaxWidth={hasMaxWidth}
        {...filteredProps}
    />
);
