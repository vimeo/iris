import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { slate, grayscale } from '../../../color';

const ICON_SIZE = rem(48);
const BORDER_RADIUS = rem(5);
const TRANSITION = '300ms ease-in-out';

export const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const commonSize = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const bgOverlay = css`
  ${commonSize};
  top: 0;
  left: 0;
  border-radius: ${BORDER_RADIUS};
  transition: transform ${TRANSITION}, opacity ${TRANSITION};
`;

export const Anchor = styled.a`
  text-decoration: none;
  position: relative;
  outline: none;
`;

export const CategoryCard = styled.button`
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
  background-color: ${slate(200)};
  border-radius: ${BORDER_RADIUS};
  position: relative;
  outline: none;
  display: flex;
  border: 0;
  transition: 150ms;

  &:focus {
    outline: none;
    transform: scale(1.025);
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
    transform: scale(1.035);
  }
`;

export const Background = styled.div<{ bg: string }>`
  ${bgOverlay};
  pointer-events: none;
  background-size: cover;
  background-position: center;
  background-image: ${({ bg }) => `url(${bg})`};

  ${CategoryCard}:hover &,
  ${CategoryCard}:focus &,
  ${Anchor}:focus & {
    transform: scale(1.05);
  }
`;

export const Overlay = styled.div`
  ${bgOverlay};
  opacity: 0.7;
  background-image: linear-gradient(
    -180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );

  ${CategoryCard}:hover & {
    opacity: 1;
  }
`;

export const CardContentWrap = styled.div`
  ${commonSize};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContent = styled.div`
  text-align: center;
  padding: ${rem(24)};
`;

export const Icon = styled.div`
  margin-bottom: ${rem(8)};

  svg {
    height: ${ICON_SIZE};
    width: ${ICON_SIZE};

    * {
      fill: ${grayscale(100)};
    }
  }
`;
