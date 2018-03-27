import React from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeHelpers';

const ParagraphAltSm = ({
    element='p',
    format = 'alternative',
    ...filteredProps
}: TypeProps) => {

    return (
        <TypeBase
            element={element}
            size="sm"
            format={format}
            {...filteredProps}
        />
    );
};

export default ParagraphAltSm;
