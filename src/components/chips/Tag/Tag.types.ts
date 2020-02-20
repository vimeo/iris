import { ReactNode } from 'react';
import { IrisProps, onClose } from '../../../utils';

export type Props = IrisProps<
  {
    /**
     * [default = 'button']
     */
    element?: 'button' | 'span';
    icon?: ReactNode;
    onClose?: onClose;
    /**
     * [default = 'md']
     */
    size?: Sizes;
    src?: string;
  },
  DOMElement
>;

export type DOMElement = HTMLButtonElement | HTMLSpanElement;

export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
