import { xs, sm, md, lg, xl, xxl, xxxl } from './Breakpoints';
import { css } from 'styled-components';
import { em } from 'polished';

export const getBreakpoint = (
    breakpointInPixels: number,
    cssDeclarations: any,
) => css`
    @media screen and (min-width: ${em(breakpointInPixels)}) {
        // @ts-ignore
        ${css(...cssDeclarations)};
    }
`;

export const mediaQuery = {
    xs: (...args) => getBreakpoint(xs, args),
    sm: (...args) => getBreakpoint(sm, args),
    md: (...args) => getBreakpoint(md, args),
    lg: (...args) => getBreakpoint(lg, args),
    xl: (...args) => getBreakpoint(xl, args),
    xxl: (...args) => getBreakpoint(xxl, args),
    xxxl: (...args) => getBreakpoint(xxxl, args),
};
