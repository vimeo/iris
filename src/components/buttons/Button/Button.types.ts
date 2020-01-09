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
    circular?: boolean;
    element?: ButtonElements;
    fluid?: Fluid;
    format?:
      | 'basic'
      | 'soft'
      | 'alternative'
      | 'secondary'
      | 'primary';
    href?: string;
    icon?: ReactNode;
    iconPosition?: IconPositions;
    loading?: boolean;
    overflow?: boolean;
    radius?: number;
    size?: Sizes;
    status?: Statuses;
    target?: Targets;
    theme?: any;
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
