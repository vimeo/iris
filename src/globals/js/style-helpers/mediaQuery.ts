import { BREAKPOINTS } from '../constants/BREAKPOINTS';

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
    xs: (...args) => getBreakpoint(BREAKPOINTS.xs, args),
    sm: (...args) => getBreakpoint(BREAKPOINTS.sm, args),
    md: (...args) => getBreakpoint(BREAKPOINTS.md, args),
    lg: (...args) => getBreakpoint(BREAKPOINTS.lg, args),
    xl: (...args) => getBreakpoint(BREAKPOINTS.xl, args),
    xxl: (...args) => getBreakpoint(BREAKPOINTS.xxl, args),
    xxxl: (...args) => getBreakpoint(BREAKPOINTS.xxxl, args),
};
