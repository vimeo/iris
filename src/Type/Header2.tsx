import React, { SFC } from 'react';
import { TypeBase } from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../Utils/Omit';

export const Header2: SFC<
  TypeProps & Omit<React.HTMLProps<HTMLHeadingElement>, 'size'>
> = ({ element = 'h2', format = 'dark', ...props }) => (
  <TypeBase element={element} size="h2" format={format} {...props} />
);
