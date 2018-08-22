import React, { SFC } from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../globals/js/type-helpers';

const Header6: SFC <
    TypeProps &
    Omit<React.HTMLProps<HTMLHeadingElement>, 'size'>
> = ({
    element = 'h6',
    format = 'dark',
    ...filteredProps
}) => (
    <TypeBase
        element={element}
        size="h6"
        format={format}
        {...filteredProps}
    />
);

export default Header6;
