import React, { SFC, HTMLProps } from 'react';
import { ListItemStyled } from './ListItemStyled';

export const ListItem: SFC<HTMLProps<HTMLElement>> = ({
  children,
  ref: _,
  ...props
}) => (
  <ListItemStyled {...props}>
    <span>{children}</span>
  </ListItemStyled>
);
