import React from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeHelpers';

const Header6 = ({
    element = 'h6',
    format = 'dark',
    ...filteredProps
}: TypeProps) => {

    return (
        <TypeBase
            element={element}
            size="h6"
            format={format}
            {...filteredProps}
        />
    );
};

export default Header6;
