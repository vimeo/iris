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
  ...props
}) =>
  ({
    div: <div {...props} />,
    main: <main {...props} />,
    aside: <aside {...props} />,
    section: <section {...props} />,
  }[columnElement]);
