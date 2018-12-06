import React, { SFC } from 'react';
import { GridProps } from './GridTypes';

export const GridVariableElement: SFC<GridProps> = ({
    element,
    centered,
    hasMaxWidth,
    isNested,
    ...props
}) =>
    ({
        div: <div {...props} />,
        main: <main {...props} />,
        aside: <aside {...props} />,
        section: <section {...props} />,
    }[element]);
