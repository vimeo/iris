import React from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../globals/js/type-helpers';

const Header3 = ({
    element = 'h3',
    format = 'dark',
    ...filteredProps
}: TypeProps & Omit<React.HTMLProps< HTMLHeadingElement >, 'size' >) => {

    return (
        <TypeBase
            element={element}
            size="h3"
            format={format}
            {...filteredProps}
        />
    );
};

export default Header3;
