import styled from 'styled-components';
import { rgba, rem } from 'polished';
import { TRANSITIONS } from '../Legacy/TRANSITIONS';
import * as COLORS from '../Color/Color';
import { ReactNode } from 'react';
import { Variant } from './Notification';

const padHorizontal = 16;
const padVertical = 12;
const iconSize = 20;
const iconMargin = 12;
const dismissIconSize = 20;

const notificationColors = {
  neutral: {
    bg: COLORS.Foam,
    color: COLORS.VimeoBlue,
  },
  success: {
    bg: COLORS.RumSwizzle,
    color: COLORS.Pistachio,
  },
  warning: {
    bg: COLORS.PalePink,
    color: COLORS.SunsetOrange,
  },
};

const notificationBg = variant =>
  notificationColors[variant] && notificationColors[variant].bg;
const notificationColor = variant =>
  notificationColors[variant] && notificationColors[variant].color;

export const NotificationStyled = styled.div<{
  icon: ReactNode;
  variant: Variant;
}>`
  position: relative;
  width: 100%;
  margin-bottom: ${rem(16)};
  padding-top: ${rem(padVertical)};
  padding-right: ${rem(dismissIconSize + padHorizontal + iconMargin)};
  padding-bottom: ${rem(padVertical)};
  padding-left: ${props =>
    props.icon ? rem(48) : rem(padHorizontal)};
  border-radius: ${rem(3)};
  background-color: ${props => notificationBg(props.variant)};
  transition: all ${TRANSITIONS.base};

  p:last-of-type {
    max-width: 44rem;
    margin-bottom: 0 !important;
  }
`;

export const Icon = styled.span<{
  header: string;
  variant: Variant;
}>`
  position: absolute;
  top: ${props => (props.header ? rem(14) : rem(padVertical))};
  left: ${rem(padHorizontal)};

  svg {
    width: ${rem(iconSize)};
    height: ${rem(iconSize)};

    * {
      fill: ${props => notificationColor(props.variant)};
    }
  }
`;

export const Dismiss = styled.div<{ variant: Variant }>`
  position: absolute;
  top: ${rem(4)};
  right: ${rem(4)};

  svg * {
    fill: ${props => notificationColor(props.variant)} !important;
  }

  &:hover button {
    background: ${props =>
      rgba(notificationColor(props.variant), 0.1)} !important;
  }
`;
