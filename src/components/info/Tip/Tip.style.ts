import styled, { css, keyframes } from 'styled-components';
import { rgba } from 'polished';

import { maxWidth } from './Tip.settings';
import { Props as TipProps } from './Tip.types';

import { black, white } from '../../../color';

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
  $wrap: boolean;
  pill?: TipProps['pill'];
  variant?: TipProps['variant'];
  attach?: TipProps['attach'];
}

export const Tip = styled.div<Props>`
  max-width: ${maxWidth}rem;
  animation: ${fadeIn} 120ms ease-in-out;
  will-change: transform;

  ${pill};
  ${variants};
  ${themes};
`;

function themes({ theme }) {
  const opacity = theme.name === 'dark' ? 0.2 : 0.05;
  const { color } = theme.content;

  return css`
    border: 1px solid ${rgba(color, opacity)};
  `;
}

function pill({ pill = false }) {
  return css`
    padding: 0.5rem ${pill ? '1rem' : '0.5rem'};
    border-radius: ${pill ? '2rem' : '0.25rem'};
  `;
}

function variants({ theme, $wrap, variant = 'simple' }) {
  switch (variant) {
    case 'simple':
      return css`
        min-width: ${$wrap ? `${maxWidth / 2}rem` : '0'};
        background-color: ${black};
        color: ${white};
        text-align: center;

        p {
          color: ${white};
        }
      `;
    case 'speech-bubble':
      return css`
        max-width: ${maxWidth * 1.25}rem;
        padding: 1.5rem;
        background: ${theme.content.background};
        box-shadow: rgba(0, 0, 0, 0.1) 0 0 0.5rem -0.25rem,
          rgba(0, 0, 0, 0.15) 0 0.75rem 0.75rem -0.75rem;
        color: ${theme.content.color};

        ${caret};

        p {
          color: ${theme.content.color};
        }
      `;
  }
}

function caret({ theme, attach }) {
  const [side, edge_1, edge_2] = invert(attach);
  const { background, color } = theme.content;

  const opacity = theme.name === 'dark' ? 0.25 : 0.15;
  const blur = theme.name === 'dark' ? '' : 'filter: blur(1px)';

  return css`
    &:after,
    &:before {
      content: '';
      z-index: 5000;
      position: absolute;
      transform: translate3d(0, 0, 0);
      ${edge_1}: calc(50% - 0.75rem);
      ${side}: -0.75rem;

      border-${attach}: 0.75rem solid ${background};
      border-${edge_1}: 0.75rem solid transparent;
      border-${edge_2}: 0.75rem solid transparent;
    }

    &:before {
      border-${attach}: 0.75rem solid ${rgba(color, opacity)};
      ${side}: -0.83rem;
      ${blur};
    }
  `;
}

function invert(attach) {
  if (attach === 'top') return ['bottom', 'left', 'right'];
  if (attach === 'bottom') return ['top', 'left', 'right'];
  if (attach === 'left') return ['right', 'top', 'bottom'];
  if (attach === 'right') return ['left', 'top', 'bottom'];
}
