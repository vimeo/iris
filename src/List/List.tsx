import React from 'react';
import { ListProps } from './ListTypes';
import { ListStyled } from './ListStyled';
import { ParagraphMd } from '../Type';


const List: React.SFC<ListProps & React.HTMLProps< HTMLOListElement > > = ({
    format = 'unordered',
    children,
    ref:_,
    ...filteredProps
}) =>  (
    <ListStyled
        {...filteredProps}
        format={format}
    >
        <ParagraphMd
            element="span"
            noMargin
        >
            {children}
        </ParagraphMd>
    </ListStyled>
);

export default List;
