import React, { SFC } from 'react';
import { TypeBase } from './TypeBase';
import { TypeProps } from './TypeTypes';

export const ParagraphMd: SFC<TypeProps> = ({
    element = 'p',
    format = 'dark',
    ...props
}) => <TypeBase element={element} size="md" format={format} {...props} />;
