import styled, { css } from 'styled-components';
import { rem, tint } from 'polished';

export const Link = styled.span<any>`
  ${({ decoration, theme, format }) => {
    const color = theme.formats[format];
    const hoverColor = tint(0.15, color);

    const base = css`
      color: ${color};
      display: inline;
      position: relative;
      padding: 0;
      font-size: inherit;
      line-height: inherit;
      text-decoration: none;
      border: 0;
      background-color: transparent;
      transition: all 0.1s ease-in-out;
      appearance: none;
      cursor: pointer;

      &:hover {
        color: ${hoverColor};
      }

      &::-moz-focus-inner {
        margin: 0;
        padding: 0;
        border: 0;
      }

      &:active {
        cursor: wait;
      }
    `;

    switch (decoration) {
      case 'loud':
        return css`
          ${base};
          font-weight: 600;

          &::after {
            ${linkBorderCss};
          }
        `;
      case 'inherit':
        return css`
          ${base};
          font-weight: inherit;
          color: inherit;
        `;
      case 'silent':
        return css`
          ${base};

          &:hover::before {
            ${linkBorderCss};
          }
        `;
      default:
        return css`
          ${base};

          &::after {
            ${linkBorderCss};
          }
        `;
    }
  }}
`;

const linkBorderCss = css`
  display: block;
  position: absolute;
  bottom: ${rem(-2)};
  left: 0;
  width: 100%;
  height: 1em;
  margin-top: ${rem(10)};
  border-bottom: ${rem(1)} solid currentColor;
  content: '';
`;
