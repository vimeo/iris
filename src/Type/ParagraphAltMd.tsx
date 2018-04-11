import React from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeHelpers';

const ParagraphAltMd = ({
    element='p',
    format = 'alternative',
    ...filteredProps
}: TypeProps) => {

    return (
        <TypeBase
            element={element}
            size="md"
            format={format}
            {...filteredProps}
        />
    );
};

export default ParagraphAltMd;
