import React from 'react';
import { GridColProps } from './GridColTypes';
import { GridColStyled } from './GridColStyled';


const GridCol: React.SFC<GridColProps> = ({
    columnElement = 'div',
    xsSpan = 24,
    ...filteredProps
}) => (
    <GridColStyled
        columnElement={columnElement}
        xsSpan={xsSpan}
        {...filteredProps} />
);

export default GridCol;
