import React from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeHelpers';

const HeaderAltSm = ({
    element = 'h3',
    format = 'alternative',
    ...filteredProps
}: TypeProps) => {

    return (
        <TypeBase 
            element={element}
            size="headerSm"
            format={format}
            {...filteredProps}
        />
    );
};

export default HeaderAltSm;
