import React from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeHelpers';

const Header3 = ({
    element = 'h3',
    format = 'dark',
    ...filteredProps
}: TypeProps) => {

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
