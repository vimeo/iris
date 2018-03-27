import React from 'react';
import TypeBase from './TypeBase';
import  { TypeProps } from './TypeHelpers';

const ParagraphMd = ({
    element='p',
    format="dark",
    ...filteredProps,
}: TypeProps) => {

    return(
        <TypeBase
            element={element}
            size='md'
            format={format}
            {...filteredProps}
        />
    )
}

export default ParagraphMd;
