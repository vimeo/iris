import React, { SFC } from 'react';
import { GridBlockStyled } from './GridBlockStyled';

export interface GridBlockProps {
    /**
     * Determine wether grid contents wrap to rows
     */
    nowrap?: boolean;
}

export const GridBlock: SFC<GridBlockProps> = ({
    nowrap = false,
    ...props
}) => <GridBlockStyled nowrap={nowrap} {...props} />;
