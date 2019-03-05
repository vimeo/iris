import React from 'react';
import { ThemeProvider } from 'styled-components';
import { select } from '@storybook/addon-knobs';
// import { addParameters } from '@storybook/react';
// import * as StorybookThemes from './theme';

const StyledTheme = {
  light: {
    color: '#FFF',
    name: 'light',
  },
  dark: {
    color: '#000',
    name: 'dark',
  },
};

// (document as any).sbTheme = StorybookThemes[StyledTheme.light.name];
// const getTheme = () => (document as any).sbTheme;

export const withTheme = story => {
  const theme = select('theme', StyledTheme, StyledTheme.light);

  //   (document as any).sbTheme = StorybookThemes[theme.name];
  //   console.log('getTheme: ', getTheme());

  //   addParameters({
  //     options: {
  //       theme: () => {
  //         console.log('getTheme: ', getTheme());
  //         return getTheme();
  //       },
  //     },
  //   });

  return (
    <ThemeProvider theme={theme}>{story({ theme })}</ThemeProvider>
  );
};
