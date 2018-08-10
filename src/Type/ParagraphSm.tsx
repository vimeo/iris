import React from 'react';
import TypeBase from './TypeBase';
import  { TypeProps } from './TypeTypes';

const ParagraphSm = ({
    element='p',
    format="dark",
    ...filteredProps
}: TypeProps) => {

    return(
        <TypeBase
            element={element}
            size='sm'
            format={format}
            {...filteredProps}
        />
    )
}

export default ParagraphSm;
