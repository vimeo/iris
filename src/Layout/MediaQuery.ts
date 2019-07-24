import { xs, sm, md, lg, xl, xxl, xxxl } from './Breakpoints';
import { css } from 'styled-components';
import { em } from 'polished';

function mq(
  breakpointInPixels: number,
  styles: TemplateStringsArray,
) {
  return css`
    @media screen and (min-width: ${em(breakpointInPixels)}) {
      ${styles};
    }
  `;
}

export const mediaQuery = {
  xs: styles => mq(xs, styles),
  sm: styles => mq(sm, styles),
  md: styles => mq(md, styles),
  lg: styles => mq(lg, styles),
  xl: styles => mq(xl, styles),
  xxl: styles => mq(xxl, styles),
  xxxl: styles => mq(xxxl, styles),
};
