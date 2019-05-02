import React, { SFC } from 'react';
import { TypeBase } from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../Utils';

export const Header4: SFC<
  TypeProps &
    Omit<
      React.HTMLProps<HTMLHeadingElement>,
      'size' | 'type' | 'onChange'
    >
> = ({ element = 'h4', format = 'dark', ...props }) => (
  <TypeBase element={element} size="h4" format={format} {...props} />
);
