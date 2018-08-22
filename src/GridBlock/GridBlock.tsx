import React, { SFC } from 'react';
import { GridBlockStyled } from './GridBlockStyled';


export interface GridBlockProps {
    /**
     * Determine wether grid contents wrap to rows
    */
    nowrap?: boolean;
};

const GridBlock: SFC<GridBlockProps> = ({
    nowrap = false,
    ...filteredProps
}) => (
    <GridBlockStyled
        nowrap={nowrap}
        {...filteredProps}
    />
);

export default GridBlock;
