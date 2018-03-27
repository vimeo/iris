import React from 'react';
import TypeBase from './TypeBase';
import  { TypeProps } from './TypeHelpers';

const ParagraphLg = ({
    element="p",
    format="dark",
    ...filteredProps,
}: TypeProps) => {

    return(
        <TypeBase
            element={element}
            size='lg'
            format={format}
            {...filteredProps}
        />
    )
}

export default ParagraphLg;