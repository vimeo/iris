import styled, { css } from 'styled-components';
import { rem } from 'polished';
import * as COLORS from '../Color/Color';
import { VimeoStyleSettings } from '../Legacy/VimeoStyleSettings';

const settings = {
  ICON_SIZE: rem(48),
  BORDER_RADIUS: rem(5),
  TRANSITION: '300ms ease-in-out',
};

const commonSize = css`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const bgOverlay = css`
  ${commonSize};
  top: 0;
  left: 0;
  border-radius: ${settings.BORDER_RADIUS};
  transition: transform ${settings.TRANSITION},
    opacity ${settings.TRANSITION};
`;

export const CategoryCardStyled = styled.div`
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
  background-color: ${COLORS.SoutherlySky};
  border-radius: ${settings.BORDER_RADIUS};
  position: relative;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
  }
`;

export const BackgroundStyled = styled.div`
  ${bgOverlay};
  background-size: cover;
  background-position: center;

  ${CategoryCardStyled}:hover & {
    transform: scale(1.05);
  }
`;

export const OverlayStyled = styled.div`
  ${bgOverlay};
  opacity: 0.7;
  background-image: linear-gradient(
    -180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );

  ${CategoryCardStyled}:hover & {
    opacity: 1;
  }
`;

export const CardContentWrapStyled = styled.div`
  ${commonSize};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContentStyled = styled.div`
  text-align: center;
  padding: ${rem(24)};
`;

export const IconWrapperStyled = styled.div`
  margin-bottom: ${rem(8)};
  svg {
    height: ${settings.ICON_SIZE};
    width: ${settings.ICON_SIZE};
    * {
      fill: ${VimeoStyleSettings.colors.typeColors.textColorLight};
    }
  }
`;
