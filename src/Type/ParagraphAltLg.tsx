import React from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../globals/js/type-helpers';

const ParagraphAltLg = ({
    element="p",
    format = 'alternative',
    ...filteredProps
}: TypeProps & Omit<React.HTMLProps< HTMLParagraphElement >, 'size' >) => {

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
