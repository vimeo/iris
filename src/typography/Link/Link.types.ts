import { IrisProps } from '../../utils';
import { ReactNode } from 'react';

export type Props = IrisProps<
  {
    contentEditable?: never;
    /**
     * [default = 'a']
     */
    element?: 'a' | 'span';
    /**
     * [default = 'primary']
     */
    format?: 'primary' | 'soft' | 'basic' | 'positive' | 'negative';
    variant?: 'minimal';
    title?: ReactNode;
    href?: string;
    target?: string;
  },
  HTMLAnchorElement | HTMLSpanElement
>;
