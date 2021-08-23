import React from 'react';
import { ThemeProvider } from 'styled-components';

// import { makeDecorator } from '@storybook/addons';
import { themes as defaults } from '@storybook/theming';

import { useLocal } from './useLocal';

export function addThemes(themes) {
  initialThemeFallback();

  const dark = (themes && themes.dark) || {};
  const light = (themes && themes.light) || {};

  const themesJSON = JSON.stringify({
    dark: { ...defaults.dark, ...dark },
    light: { ...defaults.light, ...light },
  });

  localStorage.setItem('nox-addon-themes', themesJSON);
}

// const withThemes = makeDecorator({
//   name: 'withThemes',
//   parameterName: 'themes',
//   wrapper: (story, ctx) => <ThemedStory>{story(ctx)}</ThemedStory>,
// });

export function ThemedStory(props) {
  const theme = useLocal()[0];
  return <ThemeProvider theme={theme} {...props} />;
}

function initialThemeFallback() {
  const current = localStorage.getItem('nox-addon-theme');
  if (!current) localStorage.setItem('nox-addon-theme', 'light');
}
