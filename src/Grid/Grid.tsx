import React from 'react';
import { GridProps } from './GridTypes';
import { GridStyled } from './GridStyled';


const Grid: React.SFC<GridProps> = ({
    centered = false,
    element = 'main',
    hasMaxWidth = true,
    ...filteredProps
}) => (
    <GridStyled
        centered={centered}
        element={element}
        hasMaxWidth={hasMaxWidth}
        {...filteredProps}>
    </GridStyled>
);

export default Grid;
