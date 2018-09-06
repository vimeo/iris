import React, { SFC } from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../globals/js/type-helpers';

const Header5: SFC<
    TypeProps & Omit<React.HTMLProps<HTMLHeadingElement>, 'size'>
> = ({ element = 'h5', format = 'dark', ...filteredProps }) => (
    <TypeBase element={element} size="h5" format={format} {...filteredProps} />
);

export default Header5;
