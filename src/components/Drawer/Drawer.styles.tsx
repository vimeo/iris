import styled from 'styled-components';
import { rem } from 'polished';
import { DrawerSize } from './Drawer.types';

export const DRAWER_WIDTH_XS = 276;
export const DRAWER_WIDTH_SM = 308;
export const DRAWER_WIDTH_MD = 340;
export const DRAWER_WIDTH_LG = 372;
export const DRAWER_WIDTH_XL = 404;

export const DRAWER_SIZE = {
  xs: DRAWER_WIDTH_XS,
  sm: DRAWER_WIDTH_SM,
  md: DRAWER_WIDTH_MD,
  lg: DRAWER_WIDTH_LG,
  xl: DRAWER_WIDTH_XL,
};

function panelSize(size: DrawerSize) {
  switch (size) {
    case 'xs':
      return rem(DRAWER_WIDTH_XS);
    case 'md':
      return rem(DRAWER_WIDTH_MD);
    case 'lg':
      return rem(DRAWER_WIDTH_LG);
    case 'xl':
      return rem(DRAWER_WIDTH_XL);
    case 'sm':
    default:
      return rem(DRAWER_WIDTH_SM);
  }
}

export const WithSize = styled.div<{ size: DrawerSize }>`
  width: ${({ size }) => panelSize(size)};
  height: 100vh;
`;

export const WithPlacement = styled.div<{ left: boolean }>`
  ${({ left }) =>
    left
      ? `
        left: 0;
        right: initial;`
      : `
        right: 0;
        left: initial;
    `}
`;
