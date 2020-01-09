import styled, { keyframes } from 'styled-components';
import { rem, rgba } from 'polished';
import { black, white } from '../../../color';
import { maxWidth } from './Tip.settings';

const fadeIn = keyframes`
  0% {
    transform: translateY(0.15rem) scale(0.995);
    opacity: 0;
  }

  100% {
    transform: translateY(0) scale(1) rotate(0deg);
    opacity: 1
  }
`;

interface Props {
  wrap: boolean;
  breakWords: boolean;
}

export const Tip = styled.div<Props>`
  min-width: ${p => (p.wrap ? `${maxWidth / 2}rem` : '0')};
  max-width: ${maxWidth}rem;
  padding: 0.5rem 0.5rem;
  border: 1px solid
    ${({ theme }) => rgba(white, theme.name === 'dark' ? 0.25 : 0)};
  border-radius: ${rem(3)};
  text-align: center;
  color: ${white};
  background-color: ${black};
  animation: ${fadeIn} 230ms ease-in-out;

  p {
    color: ${white};
    white-space: ${p => (p.wrap ? 'normal' : 'nowrap')};
    word-break: ${p => (p.breakWords ? 'break-all' : 'normal')};
  }
`;
