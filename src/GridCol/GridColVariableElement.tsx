import React, { SFC } from 'react';
import { GridColProps } from './GridColTypes';

export const GridColVariableElement: SFC<GridColProps> = ({
    columnElement,
    // @ts-ignore
    xsSpan,
    // @ts-ignore
    smSpan,
    // @ts-ignore
    mdSpan,
    // @ts-ignore
    lgSpan,
    // @ts-ignore
    xlSpan,
    // @ts-ignore
    offset,
    // @ts-ignore
    smOffset,
    // @ts-ignore
    mdOffset,
    // @ts-ignore
    lgOffset,
    // @ts-ignore
    xlOffset,
    // @ts-ignore
    xsFixed,
    // @ts-ignore
    smFixed,
    // @ts-ignore
    mdFixed,
    // @ts-ignore
    lgFixed,
    // @ts-ignore
    xlFixed,
    // @ts-ignore
    alignment,
    // @ts-ignore
    formColumn,
    ...rest
}) =>
    ({
        div: <div {...rest} />,
        main: <main {...rest} />,
        aside: <aside {...rest} />,
        section: <section {...rest} />,
    }[columnElement]);
