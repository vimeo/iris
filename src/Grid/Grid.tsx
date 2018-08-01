import React from 'react';
import { GridProps } from './GridTypes';
import { GridStyled } from './GridStyled';


const Grid = ({
    centered = false,
    element = 'main',
    hasMaxWidth = true,
    ...filteredProps
}: GridProps) => (
    <GridStyled 
        centered={centered}
        element={element}
        hasMaxWidth={hasMaxWidth}
        {...filteredProps}>
    </GridStyled>
);

export default Grid;
