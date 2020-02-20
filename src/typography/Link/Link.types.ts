import { IrisProps } from '../../utils';
import { ReactNode } from 'react';

export type Props = IrisProps<
  {
    /**
     * [default = 'a']
     */
    element?: 'a' | 'span';
    /**
     * [default = 'primary']
     */
    format?: 'primary' | 'soft' | 'basic' | 'positive' | 'negative';
    decoration?: 'loud' | 'inherit' | 'silent';
    title?: ReactNode;
    href?: string;
    target?: string;
  },
  HTMLAnchorElement | HTMLSpanElement
>;
