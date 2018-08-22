import React, { SFC, HTMLProps } from 'react';
import { GridProps } from './GridTypes';


export const GridVariableElement: SFC <
    GridProps &
    HTMLProps<HTMLElement>
> = ({
    element,
    ...filteredProps
}) => ({
    'div': <div {...filteredProps} />,
    'main': <main {...filteredProps} />,
    'aside': <aside {...filteredProps} />,
    'section': <section {...filteredProps} />,
}[element]);