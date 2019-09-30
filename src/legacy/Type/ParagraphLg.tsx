import React, { SFC } from 'react';
import { TypeBase } from './TypeBase';
import { TypeProps } from './TypeTypes';

export const ParagraphLg: SFC<TypeProps> = ({
  element = 'p',
  format = 'dark',
  ...props
}) => (
  <TypeBase element={element} size="lg" format={format} {...props} />
);
