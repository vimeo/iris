import { IrisProps } from '../../utils';

export type Props = IrisProps<
  {
    element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
    size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | 'plusUltra';
    format?: 'basic' | 'soft' | 'alternative';
    variant?: 'normal' | 'thin';
  },
  HTMLHeadingElement | HTMLSpanElement
>;
