import React, { ComponentType, useMemo } from 'react';
import { IrisComponent } from './IrisComponent';

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

type IrisComponentType<Props = {}> =
  | ComponentType<Props>
  | IrisComponent<Props>;

export function withDeprecateComponent<Props extends {}>(
  warning: string,
  Component: IrisComponentType<Props>,
): IrisComponentType<Props> {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`Warning: ${warning}`);
  }

  return props => <Component {...props} />;
}
