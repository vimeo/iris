import styled, { css, createGlobalStyle } from 'styled-components';
import { rgba, rem } from 'polished';

import { blue } from '../color';
import { IrisTheme } from '../themes';

export const centered = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
} as const;

export const hidden = {
  position: 'absolute',
  height: '1px',
  width: '1px',
  overflow: 'hidden',
  clip: 'rect(1px, 1px, 1px, 1px)',
};

export const Focus = styled.div<any>`
  ${({ parent, focused, variant, radius = 6, distance = 4 }) => {
    // These are basically quick hacks to support a different focus
    // style for the underline inputs until VDS has time to rebuild
    // the focus component.
    const focus =
      variant === 'underline' ? rgba(blue(300), 0.9) : blue(500);

    const expanded =
      variant === 'underline' ? 'scale(0.975);' : 'scale(1);';

    const underline =
      variant === 'underline' &&
      css`
        border-radius: 0;
        border-top-color: rgba(0, 0, 0, 0) !important;
        border-left-color: rgba(0, 0, 0, 0) !important;
        border-right-color: rgba(0, 0, 0, 0) !important;
        border-bottom-width: ${rem(6)};
      `;

    return css`
      z-index: 1;
      top: ${rem(distance * -1)};
      left: ${rem(distance * -1)};
      position: absolute;
      width: calc(100% + ${rem(distance * 2)});
      height: calc(100% + ${rem(distance * 2)});
      pointer-events: none;
      transform: scale(0.94);
      border-radius: ${rem(radius)};
      border: ${rem(1)} solid ${rgba(focus, 0)};
      transition: 150ms ease-in-out;

      ${parent}:focus > &,
      ${parent}:focus ~ &,
      ${parent}:focus ~ div > & {
        transform: ${expanded};
        border: ${rem(2)} solid ${focus};
      }

      ${focused &&
      css`
        transform: ${expanded};
        border: ${rem(2)} solid ${focus};
      `}

      ${underline};
    `;
  }}
`;

// const systemFont = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`;
const vimeoFont = `'Helvetica Neue', Helvetica, Arial, sans-serif;`;

export const GlobalStyles = createGlobalStyle<{ theme: IrisTheme }>`
  html {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: ${vimeoFont};
    min-height: 100%;
    color: ${({ theme }) => theme.content.color2};
    background: ${({ theme }) => theme.content.background};
  }

  body {
    padding: 0;
    margin: 0;
    min-height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit
  }

  blockquote, dl, dd, h1, h2, h3, h4, h5, h6, figure, p, pre, ul, li {
    margin: 0;
    padding: 0;
  }

  button {
    background: transparent;
    border-color: transparent;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;
