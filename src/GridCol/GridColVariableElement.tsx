import React, { SFC } from 'react';
import { GridColProps } from './GridColTypes';

export const GridColVariableElement: SFC<
    GridColProps & React.HTMLProps<HTMLElement>
> = ({ columnElement, ...rest }) =>
    ({
        div: <div {...rest} />,
        main: <main {...rest} />,
        aside: <aside {...rest} />,
        section: <section {...rest} />,
    }[columnElement]);
