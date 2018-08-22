import React, { SFC } from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../globals/js/type-helpers';

const Header2: SFC <
    TypeProps &
    Omit<React.HTMLProps<HTMLHeadingElement>, 'size'>
> = ({
    element = 'h2',
    format = 'dark',
    ...filteredProps
}) => (
    <TypeBase
        element={element}
        size="h2"
        format={format}
        {...filteredProps}
    />
);

export default Header2;
