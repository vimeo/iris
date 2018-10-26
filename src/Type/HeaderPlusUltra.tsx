import React, { SFC } from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../globals/js/type-helpers';

const HeaderPlusUltra: SFC<
    TypeProps & Omit<React.HTMLProps<HTMLHeadingElement>, 'size'>
> = ({ element = 'h1', format = 'dark', ...filteredProps }) => (
    <TypeBase
        element={element}
        size="plusUltra"
        format={format}
        {...filteredProps}
    />
);

export default HeaderPlusUltra;
