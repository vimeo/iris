import React from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeHelpers';

const Header5 = ({
    element = 'h5',
    format = 'dark',
    ...filteredProps
}: TypeProps) => {

    return (
        <TypeBase
            element={element}
            size="h5"
            format={format}
            {...filteredProps}
        />
    );
};

export default Header5;
