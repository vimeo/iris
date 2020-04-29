import { ReactNode } from 'react';
import { IrisProps } from '../../../utils';
import { Statuses } from '../../../themes';

export type DOMElement =
  | HTMLButtonElement
  | HTMLAnchorElement
  | HTMLSpanElement;

type ButtonElements = 'button' | 'span' | 'a';
type IconPositions = 'left' | 'right' | 'featured';
type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Targets = '_blank' | '_self' | '_parent' | '_top';
type Fluid = true | { min?: number; max?: number };

export type Props = IrisProps<
  {
    /**
     * DEPRECATED! Use `pill` prop instead.
     */
    circular?: boolean;
    element?: ButtonElements;
    /**
     * Whether the button will fill the width of its container,
     * can also specify the min, max widths in px of when the button will be fluid
     *
     * Example: {{ min: 250, max: 750 }}
     *
     * [default = false]
     */
    floating?: boolean;
    fluid?: Fluid;
    /**
     * [default = 'primary']
     */
    format?:
      | 'basic'
      | 'soft'
      | 'alternative'
      | 'secondary'
      | 'primary';
    href?: string;
    icon?: ReactNode;
    /**
     * [default = 'left']
     */
    iconPosition?: IconPositions;
    loading?: boolean;
    overflow?: boolean;
    /**
     * The focus radius around border of button
     *
     * [default = 6]
     */
    pill?: boolean;
    /**
     * [default = 'md']
     */
    size?: Sizes;
    status?: Statuses;
    target?: Targets;
    theme?: any;
    /**
     * [default = 'solid']
     */
    variant?:
      | 'solid'
      | 'transparent'
      | 'outline'
      | 'dashed'
      | 'minimal'
      | 'hyperminimal'
      | 'minimalTransparent';
  },
  DOMElement
>;
