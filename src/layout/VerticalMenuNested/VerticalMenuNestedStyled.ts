import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { COLORS } from '../../legacy';
import { BREAKPOINTS } from '../../legacy';

export const VerticalMenuNestedStyled = styled.div`
  position: relative;
  width: 100%;
  max-width: ${rem(BREAKPOINTS.sm)};
  background-color: ${COLORS.Paste};

  .LinkLabel {
    margin-bottom: 0;
  }
`;

export const ActionButton = styled.div`
  position: absolute;
  z-index: 6;
  top: ${rem(7)};
  right: ${rem(4)};
`;

export const SubMenuToggle = styled.div<{ isOpen: boolean }>`
  position: absolute;
  z-index: 6;
  top: ${rem(10)};
  left: ${rem(4)};

  svg {
    transition: transform 300ms ease-in-out;

    ${props =>
      props.isOpen &&
      css`
        transform: rotate(90deg);
      `};
  }
`;

export const SubMenuWrapper = styled.div`
  position: relative;
  margin-left: 0.5rem;
`;
