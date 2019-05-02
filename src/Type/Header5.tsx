import React, { SFC } from 'react';
import { TypeBase } from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../Utils';

export const Header5: SFC<
  TypeProps &
    Omit<
      React.HTMLProps<HTMLHeadingElement>,
      'size' | 'type' | 'onChange'
    >
> = ({ element = 'h5', format = 'dark', ...props }) => (
  <TypeBase element={element} size="h5" format={format} {...props} />
);
