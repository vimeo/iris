import React from 'react';
import { GridColProps } from './GridColTypes';


export const GridColVariableElement = ({
    columnElement,
    ...rest
}
    : GridColProps
    & React.HTMLProps<HTMLElement>
) => ({
    'div': <div {...rest} />,
    'main': <main {...rest} />,
    'aside': <aside {...rest} />,
    'section': <section {...rest} />
}[columnElement]);