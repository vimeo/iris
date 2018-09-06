import React, { SFC, HTMLProps } from 'react';
import { ListProps } from './ListTypes';
import { ListStyled } from './ListStyled';
import { ParagraphMd } from '../Type';

const List: SFC<ListProps & HTMLProps<HTMLOListElement>> = ({
    format = 'unordered',
    children,
    ref: _,
    ...filteredProps
}) => (
    <ListStyled {...filteredProps} format={format}>
        <ParagraphMd element="span" noMargin>
            {children}
        </ParagraphMd>
    </ListStyled>
);

export default List;
