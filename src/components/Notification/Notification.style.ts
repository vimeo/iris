import { MouseEventHandler, ReactNode } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { rem, rgba } from 'polished';

import { Paragraph } from '../../typography';
import { CircleInfo } from '../../icons';
import { white } from '../../color';
import { themes } from '../../themes';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 9000;
  bottom: 0;
  left: 0;
  width: 100%;
`;

interface Props {
  icon?: ReactNode;
  status: 'negative' | 'neutral';
  duration: number;
  actionLabel?: string;
  onMouseEnter: MouseEventHandler;
  onMouseLeave: MouseEventHandler;
}

const animation = keyframes`
    0%, 100% {
      opacity: 0.5;
      transform: translateY(200%) translateX(-50%) scale(0.75);
    }

    15% {
      transform: translateY(0) translateX(-50%) scale(1.05);
    }

    10%, 20%, 90% {
      opacity: 1;
      transform: translateY(0) translateX(-50%) scale(1);
    }

`;

export const Notification = styled.div<Props>`
  position: absolute;
  bottom: ${rem(28)};
  left: 50%;
  min-width: ${rem(140)};
  padding: ${rem(11)} ${rem(20)};
  border-radius: ${rem(3)};
  background: rgba(0, 0, 0, 0.9);
  box-shadow: 0 ${rem(6)} ${rem(10)} 0 rgba(0, 0, 0, 0.12);
  transform: translateX(-50%);
  text-align: center;
  transform-origin: 50 50;
  animation: ${(p) => p.duration}ms ${animation} ease-in-out both;
  border: 1px solid
    ${({ theme }) => rgba(white, theme.name === 'dark' ? 0.25 : 0)};

  ${(p) =>
    p.icon &&
    css`
      padding-left: ${rem(42)};
      text-align: left;
    `}
`;

const ContentProps = {
  size: '2',
  theme: themes.dark,
} as const;

export const Content = styled(Paragraph as any).attrs(ContentProps)<{
  children?: ReactNode;
}>`
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Icon = styled(CircleInfo)`
  position: absolute;
  top: ${rem(10)};
  left: ${rem(16)};
  width: ${rem(18)};
  height: auto;

  * {
    fill: ${white};
  }
`;

export const Action = styled.a`
  color: ${white};
  text-decoration: underline;

  &:hover {
    color: ${white};
    text-decoration: none;
  }
`;
