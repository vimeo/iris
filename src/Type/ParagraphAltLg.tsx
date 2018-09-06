import React, { SFC } from 'react';
import TypeBase from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../globals/js/type-helpers';

const ParagraphAltLg: SFC<
    TypeProps & Omit<React.HTMLProps<HTMLParagraphElement>, 'size'>
> = ({ element = 'p', format = 'alternative', ...filteredProps }) => {
    return (
        <TypeBase
            element={element}
            size="lg"
            format={format}
            {...filteredProps}
        />
    );
};

export default ParagraphAltLg;
