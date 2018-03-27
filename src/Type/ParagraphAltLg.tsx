import React from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeHelpers';

const ParagraphAltLg = ({
    element="p",
    format = 'alternative',
    ...filteredProps
}: TypeProps) => {

    return (
        <TypeBase
            element={element}
            size="lg"
            format={format}
            {...filteredProps}
        />
    );
};

export default ParagraphAltLg;
