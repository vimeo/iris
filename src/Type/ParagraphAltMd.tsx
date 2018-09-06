import React, { SFC } from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../globals/js/type-helpers';

const ParagraphAltMd: SFC<
    TypeProps & Omit<React.HTMLProps<HTMLParagraphElement>, 'size'>
> = ({ element = 'p', format = 'alternative', ...filteredProps }) => (
    <TypeBase element={element} size="md" format={format} {...filteredProps} />
);

export default ParagraphAltMd;
