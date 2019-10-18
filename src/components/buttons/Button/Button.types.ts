import { ReactNode } from 'react';
import { IrisProps } from '../../../utils';

export type DOMElement =
  | HTMLButtonElement
  | HTMLAnchorElement
  | HTMLSpanElement;

export type Props = IrisProps<BaseProps & ExclusiveProps, DOMElement>;

export type ExclusiveProps =
  | DefaultProps
  | CircularProps
  | IconOnlyProps;

type ButtonElements = 'button' | 'span' | 'a';
type IconPositions = 'left' | 'right' | 'featured';
type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Targets = '_blank' | '_self' | '_parent' | '_top';

export interface BaseProps {
  element?: ButtonElements;
  fluid?: true | Sizes;
  href?: string;
  icon?: ReactNode;
  iconPosition?: IconPositions;
  loading?: boolean;
  overflow?: boolean;
  radius?: number;
  size?: Sizes;
  status?: 'positive' | 'negative';
  target?: Targets;
}

export interface DefaultProps {
  element?: ButtonElements;
  fluid?: string;
  circular?: boolean;
  format?: 'basic' | 'soft' | 'alternative' | 'secondary' | 'primary';
  href?: string;
  icon?: ReactNode;
  iconPosition?: IconPositions;
  overflow?: boolean;
  size?: string;
  target?: Targets;
  theme?: any;
  variant?:
    | 'basic'
    | 'transparent'
    | 'outline'
    | 'dashed'
    | 'minimal'
    | 'hyperminimal'
    | 'minimalTransparent';
}

export interface CircularProps {
  circular?: boolean;
  format?: 'soft' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'dashed';
}

export interface IconOnlyProps {
  format?: 'primary' | 'secondary' | 'alternative' | 'basic';
  size?: 'sm' | 'md';
  variant?:
    | 'minimal'
    | 'hyperminimal'
    | 'minimalTransparent'
    | 'transparent';
}
