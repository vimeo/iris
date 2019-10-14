import styled, { css } from 'styled-components';
import { rem, rgba, darken } from 'polished';

import { BadgeFormats } from './Badge.types';

import { fontFamily } from '../../../typography';
import {
  red,
  white,
  green,
  blue,
  slate,
  grayscale,
} from '../../../color';

export const Wrapper = styled.div`
  position: relative;
`;

interface Props {
  format: BadgeFormats;
  href?: string;
  size: 'sm' | 'lg';
}

export const Badge = styled.span<Props>`
  display: block;
  padding: ${rem(3)} ${rem(4)};
  font-family: ${fontFamily};
  font-size: ${rem(9)};
  font-weight: 700;
  line-height: 1.2;
  border-radius: ${rem(2)};
  text-shadow: none;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  outline: none;
  text-decoration: none;
  color: inherit;

  ${badgeSizeCSS};
  ${badgeColorsCSS};

  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
`;

function badgeSizeCSS({ size }) {
  return (
    size === 'lg' &&
    css`
      padding: ${rem(5)};
      font-size: 1rem;
      font-weight: 500;
      line-height: 0.8;
      cursor: default;
      vertical-align: middle;
      text-transform: uppercase;
    `
  );
}

function basicBadge(color, hover = true) {
  return css`
    color: ${color};
    background-color: ${rgba(color, 0.15)};

    ${hover &&
      css`
        &:hover {
          color: ${darken(0.1, color)};
          background-color: ${rgba(color, 0.2)};
        }
      `};
  `;
}

function badgeColorsCSS({ format, href = null }) {
  switch (format) {
    case 'alum':
      return css`
        color: #503873;
        background-color: ${rgba('#503873', 0.25)};

        &:hover {
          background-color: ${rgba('#503873', 0.3)};
        }
      `;
    case 'beta':
      return css`
        color: #ff8a00;
      `;
    case 'business':
      return basicBadge(green(500));
    case 'curation':
      return css`
        color: #ff8a00;
        background-color: ${rgba('#FFB21E', 0.15)};

        &:hover {
          color: ${darken(0.1, '#FF8A00')};
          background-color: ${rgba('#FFB21E', 0.25)};
        }
      `;
    case 'staff':
      return css`
        color: #ff8a00;
        background-color: ${rgba('#FFB21E', 0.15)};

        &:hover {
          color: ${darken(0.1, '#FF8A00')};
          background-color: ${rgba('#FFB21E', 0.25)};
        }
      `;
    case 'support':
      return css`
        color: #ff8a00;
        background-color: ${rgba('#FFB21E', 0.15)};

        &:hover {
          color: ${darken(0.1, '#FF8A00')};
          background-color: ${rgba('#FFB21E', 0.25)};
        }
      `;
    case 'explicit':
      return css`
        color: ${red(600)};
        border: 1px solid ${red(600)};
        background-color: transparent;

        ${href &&
          css`
            &:focus,
            &:active,
            &:hover {
              color: ${red(600)};
              background-color: ${red(50)};
            }
          `}
      `;
    case 'featured':
      return css`
        color: #ff9d9d;
      `;
    case 'hd':
      return css`
        font-style: italic;
        color: #cceffc;
      `;
    case 'help':
      return css`
        cursor: help;

        &:hover,
        &:focus {
          color: ${white};
          background-color: #3a5161;
        }
      `;
    case 'info':
      return css`
        color: #d0d8db;
        cursor: help;

        &:hover,
        &:focus {
          color: ${white} !important;
          background: ${slate(500)};
        }
      `;
    case 'live':
      return css`
        color: ${white};
        background: #ff4d4d;

        &:hover {
          color: ${white};
          background: ${red(600)};
        }
      `;
    case 'live-archive':
      return css`
        color: #8699a6;
        border: 1px solid #8699a6;

        &:hover {
          color: ${slate(800)};
          border-color: ${slate(800)};
        }
      `;
    case 'new':
      return css`
        color: ${red(500)};
        vertical-align: top;
      `;
    case 'sponsor':
      return basicBadge(green(500));
    case 'partner':
      return css`
        ${basicBadge(slate(800))};
        color: #a2afb8;
        background-color: ${slate(100)};
      `;
    case 'pro':
      return basicBadge(slate(800));
    case 'plus':
      return css`
        ${basicBadge(blue(500))};
        border: none;
      `;
    case 'producer':
      return css`
        ${basicBadge('#503873')};
        border: none;
      `;
    case 'spatial':
      return css`
        color: ${slate(500)};
        border: 1px solid #d0d8db;
        background-color: transparent;

        &:focus,
        &:active,
        &:hover {
          background-color: ${grayscale(100)};
        }
      `;
    case 'upgrade':
      return css`
        color: ${white};
        background-color: ${blue(500)};

        &:hover {
          color: ${white};
          background-color: ${blue(600)};
        }
      `;
    case 'vod':
      return css`
        color: rgba(247, 180, 44, 0.2);
        background: transparent;
        border: 1px dotted rgba(247, 180, 44, 0.5);
      `;
    default:
      return '';
  }
}
