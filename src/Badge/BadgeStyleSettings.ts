import * as COLORS from '../Color/Color';
import { css } from 'styled-components';
import { darken, rgba, rem } from 'polished';

export const badgeSizeCSS = ({ size }) =>
  size === 'lg' &&
  css`
    padding: ${rem(5)};
    font-size: 1rem;
    font-weight: 500;
    line-height: 0.8;
    cursor: default;
    vertical-align: middle;
    text-transform: uppercase;
  `;

export const basicBadge = (color, hover = true) => css`
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

export function badgeColorsCSS({ format, href = null }) {
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
      return basicBadge(COLORS.Pistachio);
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
        color: ${COLORS.SunsetOrangeDarkened};
        border: 1px solid ${COLORS.SunsetOrangeDarkened};
        background-color: transparent;

        ${href &&
          css`
            &:focus,
            &:active,
            &:hover {
              color: ${COLORS.SunsetOrangeDarkened};
              background-color: ${COLORS.PalePink};
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
          color: ${COLORS.White};
          background-color: #3a5161;
        }
      `;
    case 'info':
      return css`
        color: #d0d8db;
        cursor: help;

        &:hover,
        &:focus {
          color: ${COLORS.White} !important;
          background: ${COLORS.RegentGray};
        }
      `;
    case 'live':
      return css`
        color: ${COLORS.White};
        background: #ff4d4d;

        &:hover {
          color: ${COLORS.White};
          background: ${COLORS.SunsetOrangeDarkened};
        }
      `;
    case 'live-archive':
      return css`
        color: #8699a6;
        border: 1px solid #8699a6;

        &:hover {
          color: ${COLORS.AstroGranite};
          border-color: ${COLORS.AstroGranite};
        }
      `;
    case 'new':
      return css`
        color: ${COLORS.SunsetOrange};
        vertical-align: top;
      `;
    case 'sponsor':
      return basicBadge(COLORS.Pistachio);
    case 'partner':
      return css`
        ${basicBadge(COLORS.AstroGranite)};
        color: #a2afb8;
        background-color: ${COLORS.Porcelain};
      `;
    case 'pro':
      return basicBadge(COLORS.AstroGranite);
    case 'plus':
      return css`
        ${basicBadge(COLORS.VimeoBlue)};
        border: none;
      `;
    case 'producer':
      return css`
        ${basicBadge('#503873')};
        border: none;
      `;
    case 'spatial':
      return css`
        color: ${COLORS.RegentGray};
        border: 1px solid #d0d8db;
        background-color: transparent;

        &:focus,
        &:active,
        &:hover {
          background-color: ${COLORS.Plaster};
        }
      `;
    case 'upgrade':
      return css`
        color: ${COLORS.White};
        background-color: ${COLORS.VimeoBlue};

        &:hover {
          color: ${COLORS.White};
          background-color: ${COLORS.VimeoBlueDarkened};
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
