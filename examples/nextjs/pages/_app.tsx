import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { themes } from '@vimeo/iris/themes';
import { GlobalStyles } from '@vimeo/iris/utils';

/* eslint-disable import/no-default-export */
export default function App({ Component, pageProps }) {
  const [theme, themeSet] = useState(themes.dark);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component themeSet={themeSet} {...pageProps} />
      </ThemeProvider>
    </>
  );
}
