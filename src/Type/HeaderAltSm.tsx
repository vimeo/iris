import React from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../globals/js/type-helpers';

const HeaderAltSm = ({
    element = 'h3',
    format = 'alternative',
    ...filteredProps
}: TypeProps & Omit<React.HTMLProps< HTMLHeadingElement >, 'size' >) => {

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
