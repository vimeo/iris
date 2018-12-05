import React, { SFC } from 'react';
import { GridColProps } from './GridColTypes';

export const GridColVariableElement: SFC<GridColProps> = ({
    columnElement,
    
    xsSpan,
    
    smSpan,
    
    mdSpan,
    
    lgSpan,
    
    xlSpan,
    
    offset,
    
    smOffset,
    
    mdOffset,
    
    lgOffset,
    
    xlOffset,
    
    xsFixed,
    
    smFixed,
    
    mdFixed,
    
    lgFixed,
    
    xlFixed,
    
    alignment,
    
    formColumn,
    ...rest
}) =>
    ({
        div: <div {...rest} />,
        main: <main {...rest} />,
        aside: <aside {...rest} />,
        section: <section {...rest} />,
    }[columnElement]);
