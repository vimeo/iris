import styled, { css } from 'styled-components';
import { rgba } from 'polished';

interface Props {
  atStart: boolean;
  atStop: boolean;
}

const gradientOverlay = css`
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 15%;
  z-index: 1000;
  pointer-events: none;
  transition: 120ms ease-in-out;
`;

export const Container = styled.div<Props>`
  height: 100%;
  position: relative;

  ${({ theme, atStart, atStop }) => {
    const color = theme.content.background;

    return css`
      &::before {
        ${gradientOverlay};

        top: 0;
        opacity: ${atStart ? 0 : 1};
        background: linear-gradient(
          ${rgba(color, 1)},
          ${rgba(color, 1)} 10%,
          ${rgba(color, 0)}
        );
      }

      &::after {
        ${gradientOverlay};

        bottom: 0;
        opacity: ${atStop ? 0 : 1};
        background: linear-gradient(
          ${rgba(color, 0)},
          ${rgba(color, 1)} 90%,
          ${rgba(color, 1)}
        );
      }
    `;
  }}
`;
