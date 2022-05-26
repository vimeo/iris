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
    --layout-sidebar-width: 16rem;
    --space-0: 0;
    --space-50: 0.25rem;
    --space-100: 0.5rem;
    --space-150: 0.75rem;
    --space-200: 1rem;
    --space-250: 1.25rem;
    --space-300: 1.5rem;
    --space-400: 2rem;
    --space-500: 2.5rem;
    --space-600: 3rem;
    --space-700: 3.5rem;
    --space-800: 4rem;
    --space-900: 4.5rem;
    --space-1000: 5rem;
    --space-1200: 6rem; 
  }

  img {
    width: 100%;
  }
  `;

const GlobalStylesAll = (
  <>
    <GlobalStylesIris />
    <GlobalStylesApp />
  </>
);
