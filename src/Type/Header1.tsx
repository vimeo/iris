import React from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeHelpers';

const Header1 = ({
    element = 'h1',
    format = 'dark',
    ...filteredProps
}: TypeProps) => {

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
