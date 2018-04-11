import React from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeHelpers';

const BigStat = ({
    element = 'p',
    format = 'dark',
    ...filteredProps
}: TypeProps) => {

    return (
        <TypeBase 
            element={element}
            fontStack='light'
            size="stat"
            format={format}
            {...filteredProps}
        />
    );
};

export default BigStat;
