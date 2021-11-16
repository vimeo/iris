import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { rgba, rem } from 'polished';

import { IrisTheme } from '../../../themes';
import { Text } from '../../../typography';
import { core } from '../../../tokens';

interface Props {
  format?: 'primary' | 'positive' | 'negative';
  header?: string;
  icon?: ReactNode;
  pill?: boolean;
  theme: IrisTheme;
}

export const NoticeStyled = styled.div<Props>`
  position: relative;
  width: 100%;
  margin-bottom: ${rem(16)};
  border-radius: ${(p) => (p.pill ? '2rem' : rem(3))};
  transition: 100ms ease-in-out;
  color: ${core.color.text(0)};

  ${padding};
  ${themeStyles};

  p:last-of-type {
    max-width: 44rem;
    margin-bottom: 0 !important;
  }
`;

export const NoticeChildren = styled(Text)`
  line-height: 1.25rem;
  letter-spacing: 0.01rem;
  color: ${core.color.text(0)};
  color: white;
`;

function padding({ icon = null, pill = null }) {
  const pillPad = pill ? 1.5 : 1;
  const iconPad = icon ? 2 : 0;

  return {
    paddingTop: '0.75rem',
    paddingRight: 3 + pillPad + 'rem',
    paddingBottom: '0.75rem',
    paddingLeft: 0 + pillPad + iconPad + 'rem',
  };
}

function themeColor({ theme, format }: Props, opacity = 1) {
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
  top: ${(p) => (p.header ? rem(14) : rem(12))};
  left: ${(p) => (p.pill ? '1.5rem' : '1rem')};

  svg {
    width: ${rem(20)};
    height: ${rem(20)};

    * {
      fill: ${(p) => themeColor(p)};
    }
  }
`;

export const Dismiss = styled.div<Props>`
  position: absolute;
  top: ${rem(4)};
  right: ${(p) => (p.pill ? '0.75rem' : '0.25rem')};

  svg * {
    fill: ${(p) => themeColor(p)} !important;
  }

  &:hover {
    button {
      background: ${(p) => themeColor(p, 0.1)} !important;
    }
  }
`;
