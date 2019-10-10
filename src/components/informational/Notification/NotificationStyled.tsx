import React from 'react';
import { ParagraphMd } from '../../../legacy';
import { CircleInfo } from '../../../icons';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { COLORS } from '../../../legacy';
import { keyframes } from 'styled-components';
import { BaseProps } from '../../../utils';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 9995;
  bottom: 0;
  left: 0;
  width: 100%;
`;

interface NotificationProps extends BaseProps {
  format: 'warning' | 'neutral';
  actionLabel?: string;
  onMouseEnter: React.MouseEventHandler;
  onMouseLeave: React.MouseEventHandler;
}

const notificationAnimation = ({
  actionLabel,
}: NotificationProps) => css`
  animation: ${notificationKeyframes}
    ${actionLabel ? '6000ms' : '3000ms'} ease-in-out both;
`;

const notificationKeyframes = actionLabel => keyframes`
    0%, 100% {
        opacity: 0;
        transform: translateY(${rem(28)}) translateX(-50%);
    }

    ${actionLabel ? '5%, 95%' : '10%, 90%'} {
        opacity: 1;
        transform: translateY(0) translateX(-50%);
    }
`;

export const NotificationStyled = styled(
  ({ format, actionLabel, ...props }: NotificationProps) => (
    <div {...props} />
  ),
)<NotificationProps>`
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

  ${notificationAnimation};

  ${props =>
    props.format === 'warning' &&
    css`
      padding-left: ${rem(42)};
      text-align: left;
    `}
`;

export const Content = styled(ParagraphMd)`
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const InfoIconStyled = styled(CircleInfo)`
  position: absolute;
  top: ${rem(10)};
  left: ${rem(16)};
  width: ${rem(18)};
  height: auto;

  * {
    fill: ${COLORS.White};
  }
`;

export const ActionLink = styled.a`
  color: ${COLORS.White};
  text-decoration: underline;

  &:hover {
    color: ${COLORS.White};
    text-decoration: none;
  }
`;
