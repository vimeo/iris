import { ReactNode } from 'react';
import { IrisProps } from '../../../utils';
import { Statuses } from '../../../themes';
import {
  formats,
  variants,
  sizes,
  iconPositions,
} from './Button.config';

export type DOMElement =
  | HTMLButtonElement
  | HTMLAnchorElement
  | HTMLSpanElement;

type ButtonElements = 'button' | 'span' | 'a';
type Targets = '_blank' | '_self' | '_parent' | '_top';
type Fluid = true | false | { min?: number; max?: number };

export type Props = IrisProps<
  {
    /**
     * @deprecated
     *
     * Use `pill` prop instead.
     */
    circular?: boolean;
    /**
     * Provide a color string or object of color strings for custom coloring.
     * Use this only as a last resort! It is not fully supported!
     *
     */
    color?:
      | string
      | { color: string; hover?: string; active?: string };
    element?: ButtonElements;
    floating?: boolean;
    /**
     * Whether the button will fill the width of its container,
     * can also specify the min, max widths in px of when the button will be fluid
     *
     * Example: {{ min: 250, max: 750 }}
     *
     * [default = false]
     */
    fluid?: Fluid;
    /**
     * [default = 'primary']
     */
    format?: typeof formats[number];
    href?: string;
    icon?: ReactNode;
    /**
     * [default = 'left']
     */
    iconPosition?: typeof iconPositions[number];
    loading?: boolean;
    /**
     * @deprecated
     *
     * Text overflow will always truncate.
     */
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
    size?: typeof sizes[number];
    status?: Statuses;
    target?: Targets;
    /**
     * When enabled, if the button is a minimal variant, the padding
     * opposite the side of `iconPosition` will be 0 until the
     * button is hovered or focused.
     *
     */
    textShift?: boolean;
    theme?: any;
    /**
     * [default = 'solid']
     */
    variant?: typeof variants[number];
  },
  DOMElement
>;
