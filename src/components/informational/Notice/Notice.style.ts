import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { rgba, rem } from 'polished';

import { TRANSITIONS } from '../../../legacy';
import { IrisTheme } from '../../../themes';

interface Props {
  icon?: ReactNode;
  header?: string;
  format?: 'primary' | 'positive' | 'negative';
  theme: IrisTheme;
}

export const NoticeStyled = styled.div<Props>`
  position: relative;
  width: 100%;
  margin-bottom: ${rem(16)};
  padding-top: ${rem(12)};
  padding-right: ${rem(48)};
  padding-bottom: ${rem(12)};
  padding-left: ${p => (p.icon ? rem(48) : rem(16))};
  border-radius: ${rem(3)};
  transition: all ${TRANSITIONS.base};

  ${themeStyles}

  p:last-of-type {
    max-width: 44rem;
    margin-bottom: 0 !important;
  }
`;

function themeColor({ theme, format }: Props, opacity: number = 1) {
  return rgba(theme.formats[format], opacity);
}

function themeStyles({ theme, format }: Props) {
  const color = themeColor({ theme, format });

  const background =
    theme.name === 'dark' ? rgba(color, 0.3) : rgba(color, 0.15);
  const border =
    theme.name === 'dark' ? rgba(color, 0.4) : rgba(color, 0);

  return css`
    border: 1px solid ${border};
    background-color: ${background};
  `;
}

export const Icon = styled.span<Props>`
  position: absolute;
  top: ${p => (p.header ? rem(14) : rem(12))};
  left: ${rem(16)};

  svg {
    width: ${rem(20)};
    height: ${rem(20)};

    * {
      fill: ${p => themeColor(p)};
    }
  }
`;

export const Dismiss = styled.div<Props>`
  position: absolute;
  top: ${rem(4)};
  right: ${rem(4)};

  svg * {
    fill: ${p => themeColor(p)} !important;
  }

  &:hover {
    button {
      background: ${p => themeColor(p, 0.1)} !important;
    }
  }
`;
