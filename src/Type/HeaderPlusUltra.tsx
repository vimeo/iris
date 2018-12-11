import React, { SFC } from 'react';
import { TypeBase } from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../globals/js/type-helpers';

export const HeaderPlusUltra: SFC<
    TypeProps & Omit<React.HTMLProps<HTMLHeadingElement>, 'size'>
> = ({ element = 'h1', format = 'dark', ...props }) => (
    <TypeBase element={element} size="plusUltra" format={format} {...props} />
);
