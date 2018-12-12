import { HTMLProps } from 'react';
import { Omit } from '../Utils/Omit';

export interface TypeProps extends Omit<HTMLProps<HTMLElement>, 'size'> {
    element?:
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
    format?: 'white' | 'light' | 'dark' | 'alternative' | 'success';
    noMargin?: boolean;
}

export interface StyledTypeElementProps {
    fontStack?: 'regular' | 'light';
    noMargin?: boolean;
    size:
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
}

export interface TypeByCSSInterface {
    fontStack?: 'regular' | 'light';
    format: 'white' | 'light' | 'dark' | 'alternative' | 'success';
    noMargin?: boolean;
    size:
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
}
