import React from 'react';
import { GridProps } from './GridTypes';


export const GridVariableElement = ({
    element,
    ...filteredProps
}
    : GridProps
    & React.HTMLProps<HTMLElement>
) => ({
    'div': <div {...filteredProps} />,
    'main': <main {...filteredProps} />,
    'aside': <aside {...filteredProps} />,
    'section': <section {...filteredProps} />,
}[element]);