import React from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../globals/js/type-helpers';

const Header1 = ({
    element = 'h1',
    format = 'dark',
    ...filteredProps
}: TypeProps & Omit<React.HTMLProps< HTMLHeadingElement >, 'size' > ) => {

    return (
        <TypeBase
            element={element}
            size="h1"
            format={format}
            {...filteredProps}
        />
    );
};

export default Header1;
