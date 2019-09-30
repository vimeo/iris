import React, { SFC } from 'react';
import { TypeBase } from './TypeBase';
import { TypeProps } from './TypeTypes';

export const ParagraphAltSm: SFC<
  TypeProps &
    Omit<
      React.HTMLProps<HTMLParagraphElement>,
      'size' | 'type' | 'onChange'
    >
> = ({ element = 'p', format = 'alternative', ...props }) => (
  <TypeBase element={element} size="sm" format={format} {...props} />
);
