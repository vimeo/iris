import * as COLORS from '../Color/Color';
import { css } from 'styled-components';
import { darken, rgba, rem } from 'polished';

export const badgeSizeCSS = size =>
  size === 'lg' &&
  css`
    margin-left: 2px;
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

export const badgeColorsCSS = (format, href) =>
  ({
    alum: css`
      color: #503873;
      background-color: ${rgba('#503873', 0.25)};

      &:hover {
        background-color: ${rgba('#503873', 0.3)};
      }
    `,
    beta: css`
      color: #ff8a00;
    `,
    business: basicBadge(COLORS.Pistachio),
    curation: css`
            color: #FF8A00;
            background-color: ${rgba('#FFB21E', 0.15)};

            &:hover {
                color: ${darken(0.1, '#FF8A00')};
                background-color: ${rgba('#FFB21E', 0.25)};
            }
        }
        `,
    staff: css`
            color: #FF8A00;
            background-color: ${rgba('#FFB21E', 0.15)};

            &:hover {
                color: ${darken(0.1, '#FF8A00')};
                background-color: ${rgba('#FFB21E', 0.25)};
            }
        }
        `,
    support: css`
            color: #FF8A00;
            background-color: ${rgba('#FFB21E', 0.15)};

            &:hover {
                color: ${darken(0.1, '#FF8A00')};
                background-color: ${rgba('#FFB21E', 0.25)};
            }
        }
        `,
    explicit: css`
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
        }
        `,
    featured: css`
      color: #ff9d9d;
    `,
    hd: css`
      font-style: italic;
      color: #cceffc;
    `,
    help: css`
      cursor: help;

      &:hover,
      &:focus {
        color: ${COLORS.White};
        background-color: #3a5161;
      }
    `,
    info: css`
      color: #d0d8db;
      cursor: help;

      &:hover,
      &:focus {
        color: ${COLORS.White} !important;
        background: ${COLORS.RegentGray};
      }
    `,
    live: css`
      color: ${COLORS.White};
      background: #ff4d4d;

      &:hover {
        color: ${COLORS.White};
        background: ${COLORS.SunsetOrangeDarkened};
      }
    `,
    'live-archive': css`
      color: #8699a6;
      border: 1px solid #8699a6;

      &:hover {
        color: ${COLORS.AstroGranite};
        border-color: ${COLORS.AstroGranite};
      }
    `,
    new: css`
      color: ${COLORS.SunsetOrange};
      vertical-align: top;
    `,
    sponsor: basicBadge(COLORS.Pistachio),
    partner: css`
      ${basicBadge(COLORS.AstroGranite)};
      color: #a2afb8;
      background-color: ${COLORS.Porcelain};
    `,
    pro: basicBadge(COLORS.AstroGranite),
    plus: css`
      ${basicBadge(COLORS.VimeoBlue)};
      border: none;
    `,
    producer: css`
      ${basicBadge('#503873')};
      border: none;
    `,
    spatial: css`
      color: ${COLORS.RegentGray};
      border: 1px solid #d0d8db;
      background-color: transparent;

      &:focus,
      &:active,
      &:hover {
        background-color: ${COLORS.Plaster};
      }
    `,
    upgrade: css`
      color: ${COLORS.White};
      background-color: ${COLORS.VimeoBlue};

      &:hover {
        color: ${COLORS.White};
        background-color: ${COLORS.VimeoBlueDarkened};
      }
    `,
    vod: css`
      color: rgba(247, 180, 44, 0.2);
      background: transparent;
      border: 1px dotted rgba(247, 180, 44, 0.5);
    `,
  }[format] || null);
