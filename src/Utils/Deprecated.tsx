import React, { ComponentType } from 'react';
import { IrisComponent } from './IrisComponent';

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
