import React from 'react';
import { GridBlockStyled } from './GridBlockStyled';


export interface GridBlockProps {
    /**
     * Determine wether grid contents wrap to rows
    */
    nowrap?: boolean;
};

const GridBlock: React.SFC<GridBlockProps> = ({
    nowrap = false,
    ...filteredProps
}) => (
    <GridBlockStyled
        nowrap={nowrap}
        {...filteredProps} />
);

export default GridBlock;
