import React, { useMemo } from 'react';
import { IrisComponent } from './IrisComponent';
import { IrisInputComponent } from './IrisInputComponent';

export function withDeprecateProps<Props extends {}>(
  warnings: { [key in keyof Partial<Props>]: string },
  Component: IrisComponent<Props>,
): IrisComponent<Props> {
  return props => {
    if (process.env.NODE_ENV === 'development') {
      useMemo(
        () =>
          Object.keys(warnings)
            .filter(key => Object.keys(props).includes(key))
            .map(key => console.warn(`Warning: ${warnings[key]}`)),
        [props],
      );
    }

    return <Component {...props} />;
  };
}

export function withDeprecateComponent<Props extends {}>(
  warning: string,
  Component: IrisInputComponent<Props>,
): IrisInputComponent<Props> {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`Warning: ${warning}`);
  }

  return props => <Component {...props} />;
}
