import React, { SFC } from 'react';
import { GridColProps } from './GridColTypes';
import { GridColStyled } from './GridColStyled';

const GridCol: SFC<GridColProps> = ({
    columnElement = 'div',
    xsSpan = 24,
    ...filteredProps
}) => (
    <GridColStyled
        columnElement={columnElement}
        xsSpan={xsSpan}
        {...filteredProps}
    />
);

export default GridCol;
