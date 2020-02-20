import { IrisProps } from '../../../utils';

export type Props = IrisProps<
  {
    /**
     * [default = 'auto']
     */
    size?: Sizes;
    src: string;
    srcSet?: string;
    href?: string;
    target?: '_blank';
  },
  DOMElement
>;

export type DOMElement = HTMLImageElement | HTMLAnchorElement;

export type Sizes =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'auto';
