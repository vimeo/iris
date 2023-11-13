import { ReactNode } from 'react';
import { IrisInputProps } from '../../../utils';

export type Props = IrisInputProps<
  {
    children?: ReactNode[];
    defaultValue?: string | string[];
    /**
     * Whether to use the native select dropdown or the styled faux dropdown
     *
     * [default = false]
     */
    faux?: boolean;
    /**
     * [default = 'basic']
     */
    format?: 'basic';
    /**
     * @deprecated
     */
    icon?: ReactNode;
    options?: Array<{ label: string; value: string }>;
    pill?: boolean;
    /**
     * [default = 'md']
     */
    size?: Sizes;
    value?: string | string[];
    /**
     * [default = '100%']
     */
    maxHeight?: string;
  },
  HTMLSelectElement
>;

export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
