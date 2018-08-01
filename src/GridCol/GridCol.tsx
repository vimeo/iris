import React from 'react';
import { GridColProps } from './GridColTypes';
import { GridColStyled } from './GridColStyled';


const GridCol = ({
    columnElement = 'div',
    xsSpan = 24, 
    ...filteredProps
}: GridColProps) => (
    <GridColStyled
        columnElement={columnElement}
        xsSpan={xsSpan}
        {...filteredProps} />
);

export default GridCol;
