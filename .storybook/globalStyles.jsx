import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        padding: 2rem;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
`;

export const withGlobalStyles = storyFn => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
);
