import { IrisProps } from '../../utils';
import { IrisTheme } from '../../themes';

export type Props = IrisProps<
  {
    element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
    size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | 'plusUltra';
    format?: 'basic' | 'soft' | 'alternative';
    variant?: 'normal' | 'thin';
  },
  HTMLHeadingElement | HTMLSpanElement
>;

export interface StyleProps {
  variant?: Props['variant'] | 'plusUltra';
  size?: Props['size'];
  format?: Props['format'];
  theme: IrisTheme;
}
