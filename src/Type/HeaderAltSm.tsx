import React, { SFC } from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../globals/js/type-helpers';

const HeaderAltSm: SFC<
    TypeProps & Omit<React.HTMLProps<HTMLHeadingElement>, 'size'>
> = ({ element = 'h3', format = 'alternative', ...filteredProps }) => (
    <TypeBase
        element={element}
        size="headerSm"
        format={format}
        {...filteredProps}
    />
);

export default HeaderAltSm;
