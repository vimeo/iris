import React from 'react';
import styled, { css } from 'styled-components';
import { fontFamily, antialias } from './index';
import {
  RegentGray,
  AstroGranite,
  SoutherlySky,
  Paste,
  Pistachio,
  PistachioLightened,
} from '../legacy';
import { IrisComponent } from '../utils';

interface Props {
  size?: '1' | '2' | '3' | '4';
  theme?: 'dark' | 'light';
  variant?: 'normal' | 'alt';
}

export const Paragraph: IrisComponent<Props> = ({
  size = '4',
  theme = 'light',
  variant = 'normal',
  ...props
}) => <Text size={size} theme={theme} variant={variant} {...props} />;

const p = {
  color: {
    light: {
      alt: RegentGray,
      normal: AstroGranite,
      success: Pistachio,
    },
    dark: {
      alt: SoutherlySky,
      normal: Paste,
      success: PistachioLightened,
    },
  },
  font: {
    4: '0.625rem / 0.75rem',
    3: '0.75rem / 1rem',
    2: '0.875rem / 1.25rem',
    1: '1rem / 1.25rem',
  },
  marginBottom: {
    4: '0.75rem',
    3: '1rem',
    2: '1.25rem',
    1: '1.5rem',
  },
};

const Text = styled.p<Props>`
  ${({ size }) => css`
    font: 400 ${p.font[size]} ${fontFamily};
    letter-spacing: 0.01rem;
    margin-bottom: ${p.marginBottom[size]};
  `};

  ${({ theme, variant }) =>
    theme === 'light'
      ? css`
          color: ${p.color[theme][variant]};
        `
      : css`
          color: ${p.color[theme][variant]};
          ${antialias}
        `};
`;
