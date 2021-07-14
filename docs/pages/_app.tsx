import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { themes } from '@vimeo/iris/themes';
import { GlobalStyles as GlobalStylesIris } from '@vimeo/iris/utils';

/* eslint-disable import/no-default-export */
export default function App({ Component, pageProps }) {
  const [theme, themeSet] = useState(themes.dark);

  return (
    <>
      <ThemeProvider theme={theme}>
        {GlobalStylesAll}
        <Component themeSet={themeSet} {...pageProps} />
      </ThemeProvider>
    </>
  );
}

const GlobalStylesApp = createGlobalStyle`
  :root {
    --layout-site-width: 60rem;
  }
  `;

const GlobalStylesAll = (
  <>
    <GlobalStylesIris />
    <GlobalStylesApp />
  </>
);
