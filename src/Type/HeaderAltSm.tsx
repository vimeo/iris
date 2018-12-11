import React, { SFC } from 'react';
import { TypeBase } from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../globals/js/type-helpers';

export const HeaderAltSm: SFC<
    TypeProps & Omit<React.HTMLProps<HTMLHeadingElement>, 'size'>
> = ({ element = 'h3', format = 'alternative', ...props }) => (
    <TypeBase element={element} size="headerSm" format={format} {...props} />
);
