import React, { SFC } from 'react';
import { TypeBase } from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../Utils';

export const Header2: SFC<
  TypeProps &
    Omit<
      React.HTMLProps<HTMLHeadingElement>,
      'size' | 'type' | 'onChange'
    >
> = ({ element = 'h2', format = 'dark', ...props }) => (
  <TypeBase element={element} size="h2" format={format} {...props} />
);
