import React, { SFC } from 'react';
import { GridProps } from './GridTypes';

export const GridVariableElement: SFC<GridProps> = ({
    element,
    
    centered,
    
    hasMaxWidth,
    
    isNested,
    ...filteredProps
}) =>
    ({
        div: <div {...filteredProps} />,
        main: <main {...filteredProps} />,
        aside: <aside {...filteredProps} />,
        section: <section {...filteredProps} />,
    }[element]);
