import styled, { css } from 'styled-components';
import { darken, rem, rgba } from 'polished';

import { Props as BadgeProps } from './Badge.types';

import { core } from '../../tokens';
import {
  red,
  white,
  green,
  blue,
  slate,
  grayscale,
} from '../../color';

export const Wrapper = styled.div`
  position: relative;
`;

interface Props {
  $format: BadgeProps['format'];
  href?: BadgeProps['href'];
  size: BadgeProps['size'];
}

export const Badge = styled.span<Props>`
  display: block;
  outline: none;
  border-radius: ${rem(2)};
  letter-spacing: 0.02rem;
  color: inherit;
  text-shadow: none;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  transition: 90ms ease-in-out;

  ${format};
  ${size};

  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
`;

export function size({ size }) {
  switch (size) {
    case 'sm':
      return css`
        padding: 0.1875rem 0.25rem;
        font-size: 0.5625rem;
        font-weight: 500;
        line-height: 1.2;
      `;
    case 'lg':
      return css`
        padding: 0.3125rem;
        font-size: 1rem;
        font-weight: 500;
        line-height: 0.8;
      `;
    case 'xl':
      return css`
        border-width: 2px;
        border-radius: 0.25rem;
        padding: 0.5rem 0.75rem;
        font-weight: 600;
        line-height: 0.8;
        font-size: 1.125rem;
      `;
  }
}

export function format({ $format, href = null }) {
  switch ($format) {
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
    case 'mature': {
      const color = core.color.status.negative;
      return css`
        color: ${color};
        border: 1px solid ${color};
      `;
    }
    case 'new':
      return css`
        color: ${red(500)};
        vertical-align: top;
      `;
    case 'not-yet-rated': {
      const color = core.color.text(900);
      return css`
        color: ${color};
        border: 1px solid ${color};
      `;
    }
    case 'restricted': {
      return css`
        color: ${white};
        background-color: ${red(500)};
        opacity: 0.7;
      `;
    }
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
