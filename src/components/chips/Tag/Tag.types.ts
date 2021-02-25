import { ReactNode } from 'react';
import { IrisProps, onClose } from '../../../utils';

export type Props = IrisProps<
  {
    /**
     * [default = 'button']
     */
    element?: 'button' | 'span';
    /**
     * @deprecated
     */
    icon?: ReactNode;
    /**
     * A close promise that returns an accept, reject, and/or complete function
     * ex: onClose={{ reject: () => alert('deleted this tag') }}
     */
    onClose?: onClose;
    /**
     * [default = 'md']
     */
    size?: Sizes;
    /**
     * Optional image
     */
    src?: string;
  },
  DOMElement
>;

export type DOMElement = HTMLButtonElement | HTMLSpanElement;

export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
