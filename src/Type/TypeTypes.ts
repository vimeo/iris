export interface TypeProps {
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
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'headerSm';
}

export interface typeByCSSInterface {
    fontStack?: 'regular' | 'light';
    format: 'white' | 'light' | 'dark' | 'alternative' | 'success';
    noMargin?: boolean;
    size:
        | 'xs'
        | 'sm'
        | 'md'
        | 'lg'
        | 'stat'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'headerSm';
}
