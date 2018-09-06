import React, { SFC } from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeTypes';

const ParagraphMd: SFC<TypeProps> = ({
    element = 'p',
    format = 'dark',
    ...filteredProps
}) => (
    <TypeBase element={element} size="md" format={format} {...filteredProps} />
);

export default ParagraphMd;
