import { IrisProps } from '../../../utils';

export type Props = IrisProps<
  {
    /**
     * [default = 'auto']
     */
    size?: Size;
    src: string;
    srcSet?: string;
    href?: string;
    target?: '_blank';
  },
  DOMElement
>;

export type DOMElement = HTMLImageElement | HTMLAnchorElement;

export type Size = keyof typeof sizes;
export const sizes = {
  auto: '100%',
  xxs: '0.75rem',
  xs: '1rem',
  sm: '2rem',
  md: '2.5rem',
  lg: '4rem',
  xl: '9.375rem',
  xxl: '15rem',
} as const;
