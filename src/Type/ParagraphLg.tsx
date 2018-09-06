import React, { SFC } from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeTypes';

const ParagraphLg: SFC<TypeProps> = ({
    element = 'p',
    format = 'dark',
    ...filteredProps
}) => (
    <TypeBase element={element} size="lg" format={format} {...filteredProps} />
);

export default ParagraphLg;
