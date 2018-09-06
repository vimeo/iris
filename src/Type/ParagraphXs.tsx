import React, { SFC } from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeTypes';

const ParagraphXs: SFC<TypeProps> = ({
    element = 'p',
    format = 'dark',
    ...filteredProps
}) => (
    <TypeBase element={element} size="xs" format={format} {...filteredProps} />
);

export default ParagraphXs;
