import React, { SFC } from 'react';
import { TypeBase } from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../Utils/Omit';

export const HeaderPlusUltra: SFC<
  TypeProps & Omit<React.HTMLProps<HTMLHeadingElement>, 'size'>
> = ({ element = 'h1', format = 'dark', ...props }) => (
  <TypeBase
    element={element}
    size="plusUltra"
    format={format}
    {...props}
  />
);
