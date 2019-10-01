import { css } from 'styled-components';
import { em } from 'polished';

export const xs = 360;
export const sm = 480;
export const md = 768;
export const lg = 1080;
export const xl = 1280;
export const xxl = 1440;
export const xxxl = 1680;

function mq(breakpointInPixels: number, styles: TemplateStringsArray) {
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
