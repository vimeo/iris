import React from 'react';
import TypeBase from './TypeBase';
import  { TypeProps } from './TypeHelpers';

const ParagraphXs = ({
    element='p',
    format="dark",
    ...filteredProps,
}: TypeProps) => {

    return(
        <TypeBase
            element={element}
            size='xs'
            format={format}
            {...filteredProps}
        />
    )
}

export default ParagraphXs;
