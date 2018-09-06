import React, { SFC } from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../globals/js/type-helpers';

const BigStat: SFC<
    TypeProps & Omit<React.HTMLProps<HTMLHeadingElement>, 'size'>
> = ({ element = 'p', format = 'dark', ...filteredProps }) => (
    <TypeBase
        element={element}
        fontStack="light"
        size="stat"
        format={format}
        {...filteredProps}
    />
);

export default BigStat;
