import { Omit } from '../globals/js/type-helpers';
interface TypeProps extends Omit<React.HTMLProps<HTMLElement>, 'size'> {
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
    format?: 'white' | 'light' | 'dark' | 'alternative';
    noMargin?: boolean;
}

const getUnitlessLineHeight = (
    fontSizeInPx: number,
    targetLineHeightInPx: number
) => targetLineHeightInPx / fontSizeInPx;

export { getUnitlessLineHeight, TypeProps };
