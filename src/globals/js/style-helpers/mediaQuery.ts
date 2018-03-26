import BREAKPOINTS from '../constants/BREAKPOINTS';
// @ts-ignore
import {css, StyledComponentClass, Styles} from 'styled-components';
import {em} from 'polished';

const getBreakpoint = (breakpointInPixels: number, cssDeclarations: any) => css`
    @media screen and (min-width: ${em(breakpointInPixels)}) {
        // @ts-ignore
        ${ css(...cssDeclarations) }
    }
`

const mediaQuery = {
    xs: (...args) => getBreakpoint(BREAKPOINTS.xs, args),
    sm: (...args) => getBreakpoint(BREAKPOINTS.sm, args),
    md: (...args) => getBreakpoint(BREAKPOINTS.md, args),
    lg: (...args) => getBreakpoint(BREAKPOINTS.lg, args),
    xl: (...args) => getBreakpoint(BREAKPOINTS.xl, args),
    xxl: (...args) => getBreakpoint(BREAKPOINTS.xxl, args),
    xxxl: (...args) => getBreakpoint(BREAKPOINTS.xxxl, args),
}

export default mediaQuery;
export {getBreakpoint};





