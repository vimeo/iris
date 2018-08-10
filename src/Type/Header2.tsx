import React from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../globals/js/type-helpers';

const Header2 = ({
    element = 'h2',
    format = 'dark',
    ...filteredProps
}: TypeProps & Omit<React.HTMLProps< HTMLHeadingElement >, 'size' > ) => {

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
