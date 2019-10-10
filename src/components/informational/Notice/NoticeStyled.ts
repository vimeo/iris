import { ReactNode } from 'react';
import styled from 'styled-components';
import { rgba, rem } from 'polished';

import { Variant } from './Notice';

import { TRANSITIONS } from '../../../legacy';
import { COLORS } from '../../../legacy';

const padHorizontal = 16;
const padVertical = 12;
const iconSize = 20;
const iconMargin = 12;
const dismissIconSize = 20;

const colors = {
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

const noticeBg = variant => colors[variant] && colors[variant].bg;
const noticeColor = variant =>
  colors[variant] && colors[variant].color;

export const NoticeStyled = styled.div<{
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
  background-color: ${props => noticeBg(props.variant)};
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
      fill: ${props => noticeColor(props.variant)};
    }
  }
`;

export const Dismiss = styled.div<{ variant: Variant }>`
  position: absolute;
  top: ${rem(4)};
  right: ${rem(4)};

  svg * {
    fill: ${props => noticeColor(props.variant)} !important;
  }

  &:hover button {
    background: ${props =>
      rgba(noticeColor(props.variant), 0.1)} !important;
  }
`;
