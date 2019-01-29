import React, { SFC } from 'react';
import { TypeBase } from './TypeBase';
import { TypeProps } from './TypeTypes';

export const ParagraphXs: SFC<TypeProps> = ({
  element = 'p',
  format = 'dark',
  ...props
}) => (
  <TypeBase element={element} size="xs" format={format} {...props} />
);
