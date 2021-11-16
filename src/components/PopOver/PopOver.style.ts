import styled, { css, keyframes } from 'styled-components';
import { rem, rgba } from 'polished';

import { Props } from './PopOver.types';

const fadeIn = keyframes`
  0% {
    transform: translateY(-0.25rem) scale(0.98);
    opacity: 0;

  }

  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`;

export const PopOverStyled = styled.div<Props>`
  background: ${({ theme }) => theme.content.background};
  min-width: 10rem;
  min-height: 2rem;
  max-width: 40rem;
  border-radius: 0.25rem;
  animation: ${fadeIn} 150ms ease-in-out;

  ${(p) =>
    p.theme.name === 'dark'
      ? css`
          border: 1px solid ${rgba(255, 255, 255, 0.125)};
        `
      : css`
          box-shadow: 0 0 ${rem(1)} 0 rgba(0, 0, 0, 0.15),
            0 ${rem(4)} ${rem(8)} 0 rgba(0, 0, 0, 0.15);
        `};
`;
