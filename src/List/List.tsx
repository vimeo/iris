import React, { SFC, HTMLProps } from 'react';
import { ListProps } from './ListTypes';
import { ListStyled } from './ListStyled';
import { ParagraphMd } from '../Type';

export const List: SFC<ListProps & HTMLProps<HTMLOListElement>> = ({
  format = 'unordered',
  children,
  ref: _,
  ...props
}) => (
  <ListStyled {...props} format={format}>
    <ParagraphMd element="span" noMargin>
      {children}
    </ParagraphMd>
  </ListStyled>
);
