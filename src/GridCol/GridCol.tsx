import React, { SFC } from 'react';
import { GridColProps } from './GridColTypes';
import { GridColStyled } from './GridColStyled';

export const GridCol: SFC<GridColProps> = ({
    columnElement = 'div',
    xsSpan = 24,
    ...props
}) => (
    <GridColStyled columnElement={columnElement} xsSpan={xsSpan} {...props} />
);
