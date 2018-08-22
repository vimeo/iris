import React, {SFC, HTMLProps } from 'react';
import { ListItemStyled } from './ListItemStyled';

const ListItem: SFC<HTMLProps<HTMLElement>> = ({
    children,
    ref:_,
    ...filteredProps
}) =>  (
    <ListItemStyled
        {...filteredProps}
    >
        <span>
            {children}
        </span>
    </ListItemStyled>
);

export default ListItem;
