import React, { SFC } from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../globals/js/type-helpers';

const Header4: SFC<
    TypeProps & Omit<React.HTMLProps<HTMLHeadingElement>, 'size'>
> = ({ element = 'h4', format = 'dark', ...filteredProps }) => (
    <TypeBase element={element} size="h4" format={format} {...filteredProps} />
);

export default Header4;
