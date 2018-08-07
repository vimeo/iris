import React from 'react';
import { ListItemStyled } from './ListItemStyled';

const ListItem: React.SFC< React.HTMLProps< HTMLElement> > = ({
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
