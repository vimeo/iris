import React from 'react';
import TypeBase from './TypeBase';
import  { TypeProps } from './TypeTypes';

const ParagraphLg = ({
    element="p",
    format="dark",
    ...filteredProps
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