import React, { SFC } from 'react';
import { TypeBase } from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../Utils/Omit';

export const BigStat: SFC<
  TypeProps & Omit<React.HTMLProps<HTMLHeadingElement>, 'size'>
> = ({ element = 'p', format = 'dark', ...props }) => (
  <TypeBase
    element={element}
    fontStack="light"
    size="stat"
    format={format}
    {...props}
  />
);
