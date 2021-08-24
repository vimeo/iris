import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { rgba } from 'polished';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    min-height: 100%;
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

  a {
    text-decoration: none;
  }

  button {
    background: transparent;
    border-color: transparent;
    padding: 0;
    margin: 0;
  }

  /* ADDON-DOCS-THEME-HACKS */

  html, body {
    background: ${({ theme }) => theme.content.background};
    color: ${({ theme }) => theme.content.color};

    .sbdocs {
      color: ${({ theme }) => theme.content.color};
    }

  .sbdocs.sbdocs-wrapper {
    background: ${({ theme }) => theme.content.background};
    color: ${({ theme }) => theme.content.color};
    border: 1px solid ${({ theme }) =>
      rgba(theme.content.color, 0.2)};
  }
  }
`;

export function Themed({ children }) {
  const themes = JSON.parse(localStorage.getItem('nox-addon-themes'));
  const current = localStorage.getItem('nox-addon-theme');
  const theme = themes[current];

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export function Styles() {
  // const themes = JSON.parse(localStorage.getItem('nox-addon-themes'));
  // const current = localStorage.getItem('nox-addon-theme');
  // const theme = themes[current];

  return (
    <Themed>
      <GlobalStyles></GlobalStyles>
    </Themed>
  );
}
