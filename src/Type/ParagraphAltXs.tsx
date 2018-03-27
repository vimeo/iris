import React from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeHelpers';

const ParagraphAltXs = ({
    element='p',
    format = 'alternative',
    ...filteredProps
}: TypeProps) => {

    return (
        <TypeBase
            element={element}
            size="xs"
            format={format}
            {...filteredProps}
        />
    );
};

export default ParagraphAltXs;
