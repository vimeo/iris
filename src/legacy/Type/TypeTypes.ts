import { BaseProps } from '../../utils';

type sizes =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'stat'
  | 'plusUltra'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'headerSm';

type elements =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'li'
  | 'div'
  | 'span'
  | 'label'
  | 'legend';

type formats = 'white' | 'light' | 'dark' | 'alternative' | 'success';

export interface TypeProps extends BaseProps {
  element?: elements;
  format?: formats;
  noMargin?: boolean;
  role?: string;
}

export interface StyledTypeElementProps {
  fontStack?: 'regular' | 'light';
  noMargin?: boolean;
  size: sizes;
}

export interface TypeByCSSInterface {
  fontStack?: 'regular' | 'light';
  format: formats;
  noMargin?: boolean;
  size: sizes;
}
