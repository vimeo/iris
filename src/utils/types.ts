import {
  JSXElementConstructor,
  Key,
  CSSProperties,
  ComponentType,
} from 'react';
import { StandardLonghandPropertiesHyphen } from 'csstype';

import { IrisProps } from './IrisProps';

export type Override<T, U> = Omit<T, keyof U> & U;

export type ExtractProps<C> = C extends ComponentType<infer P>
  ? P
  : never;

export type CSSProps = CSSProperties &
  StandardLonghandPropertiesHyphen;

export interface IrisElement<
  P = any,
  T extends string | JSXElementConstructor<any> =
    | string
    | JSXElementConstructor<any>
> {
  type: T;
  props: IrisProps<P>;
  key: Key | null;
}
