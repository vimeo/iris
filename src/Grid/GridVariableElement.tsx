import React, { SFC } from 'react';
import { GridProps } from './GridTypes';

export const GridVariableElement: SFC<GridProps> = ({
    element,
    // @ts-ignore
    centered,
    // @ts-ignore
    hasMaxWidth,
    // @ts-ignore
    isNested,
    ...filteredProps
}) =>
    ({
        div: <div {...filteredProps} />,
        main: <main {...filteredProps} />,
        aside: <aside {...filteredProps} />,
        section: <section {...filteredProps} />,
    }[element]);
