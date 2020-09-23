import styled, { css } from 'styled-components';
import { rem, tint } from 'polished';

export const Link = styled.span<any>`
  ${({ variant, theme, format }) => {
    if (!format || !theme.formats[format]) format = 'primary';

    const color = theme.formats[format];
    const hoverColor = tint(0.15, color);

    return css`
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

      ${variant !== 'minimal' &&
      css`
        &::after {
          display: block;
          position: absolute;
          bottom: ${rem(-2)};
          left: 0;
          width: 100%;
          height: 1em;
          margin-top: ${rem(10)};
          border-bottom: ${rem(1)} solid currentColor;
          content: '';
        }
      `}
    `;
  }}
`;
