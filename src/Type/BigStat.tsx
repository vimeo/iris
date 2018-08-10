import React from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../globals/js/type-helpers';

const BigStat = ({
    element = 'p',
    format = 'dark',
    ...filteredProps
}: TypeProps & Omit<React.HTMLProps< HTMLHeadingElement >, 'size' > ) => {

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
