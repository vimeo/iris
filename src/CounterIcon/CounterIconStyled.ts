import styled from 'styled-components';
import { rem, rgba } from 'polished';
import * as COLORS from '../Color/Color';
import { TRANSITIONS } from '../Legacy/TRANSITIONS';

const iconSize = 18;

export const CounterIconStyled = styled.div`
  display: inline-block;
`;

export const IconWrapperStyled = styled.span`
  position: absolute;
  top: ${rem(5)};
  left: ${rem(4)};

  width: ${rem(iconSize)};
  height: ${rem(iconSize)};

  svg {
    width: ${rem(iconSize)};
    height: ${rem(iconSize)};

    * {
      fill: ${COLORS.AstroGranite};
    }
  }
`;

export const CounterIconContentStyled = styled.span`
  display: inline-flex;
  display: inline-block;
  position: relative;
  padding: ${rem(4)} ${rem(4)} ${rem(4)} ${rem(iconSize + 10)};
  color: ${COLORS.AstroGranite};
  border: 0;
  border-radius: ${rem(3)};
  background: transparent;
  transition: all ${TRANSITIONS.base};
  text-align: center;
  vertical-align: middle;
  appearance: none;
  align-items: center;
  justify-content: center;
  -webkit-font-smoothing: antialiased;

  ${CounterIconStyled}:hover & {
    background-color: ${rgba(162, 175, 184, 0.16)};
  }
`;
