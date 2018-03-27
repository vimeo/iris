import React from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeHelpers';

const Header2 = ({
    element = 'h2',
    format = 'dark',
    ...filteredProps
}: TypeProps) => {

    return (
        <TypeBase
            element={element}
            size="h2"
            format={format}
            {...filteredProps}
        />
    );
};

export default Header2;
