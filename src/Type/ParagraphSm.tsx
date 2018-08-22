import React, { SFC } from 'react';
import TypeBase from './TypeBase';
import  { TypeProps } from './TypeTypes';

const ParagraphSm: SFC<TypeProps> = ({
    element='p',
    format="dark",
    ...filteredProps
}) => (
    <TypeBase
        element={element}
        size='sm'
        format={format}
        {...filteredProps}
    />
);

export default ParagraphSm;
