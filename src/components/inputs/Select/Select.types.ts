import { ReactNode } from 'react';
import { IrisInputProps } from '../../../utils';

export type Props = IrisInputProps<
  {
    defaultValue?: string | string[];
    /**
     * @deprecated
     */
    icon?: ReactNode;
    options?: Array<{ label: string; value: string }>;
    /**
     * [default = 'md']
     */
    size?: Sizes;
    value?: string | string[];
    /**
     * [default = 'basic']
     */
    format?: 'basic';
    /**
     * Whether to use the native select dropdown or the styled faux dropdown
     *
     * [default = false]
     */
    faux?: boolean;
    children?: ReactNode[];
  },
  HTMLSelectElement
>;

export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
