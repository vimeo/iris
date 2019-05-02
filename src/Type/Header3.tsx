import React, { SFC } from 'react';
import { TypeBase } from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../Utils';

export const Header3: SFC<
  TypeProps &
    Omit<
      React.HTMLProps<HTMLHeadingElement>,
      'size' | 'type' | 'onChange'
    >
> = ({ element = 'h3', format = 'dark', ...props }) => (
  <TypeBase element={element} size="h3" format={format} {...props} />
);
