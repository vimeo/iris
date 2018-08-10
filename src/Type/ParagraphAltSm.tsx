import React from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../globals/js/type-helpers';

const ParagraphAltSm = ({
    element='p',
    format = 'alternative',
    ...filteredProps
}: TypeProps & Omit<React.HTMLProps< HTMLParagraphElement >, 'size' > ) => {

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
