import React from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeHelpers';

const Header4 = ({
    element = 'h4',
    format = 'dark',
    ...filteredProps
}: TypeProps) => {

    return (
        <TypeBase
            element={element}
            size="h4"
            format={format}
            {...filteredProps}
        />
    );
};

export default Header4;
