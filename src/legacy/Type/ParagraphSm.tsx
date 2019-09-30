import React, { SFC } from 'react';
import { TypeBase } from './TypeBase';
import { TypeProps } from './TypeTypes';

export const ParagraphSm: SFC<TypeProps> = ({
  element = 'p',
  format = 'dark',
  ...props
}) => (
  <TypeBase element={element} size="sm" format={format} {...props} />
);
