import { useState } from 'react';

import addons from '@storybook/addons';
import { FORCE_RE_RENDER } from '@storybook/core-events';
import { themes as defaults } from '@storybook/theming';

const { getChannel } = addons;

// Hacky. Read/write theme with localStorage.
export function useLocal() {
  const [_, renderHack] = useState();
  const local = localStorage.getItem('nox-addon-theme') || 'light';
  const theme = read(local);

  const themeSet = (payload) => {
    const forceUpdate = payload + `${Math.random()}`.substring(5, 10);

    renderHack(forceUpdate);
    getChannel().emit(FORCE_RE_RENDER);

    localStorage.setItem('nox-addon-theme', payload);
  };

  return [theme, themeSet];
}

// Read and parse localStorage theme JSON.
export function read(name) {
  const themesJSON = localStorage.getItem('nox-addon-themes');
  const themes = themesJSON ? JSON.parse(themesJSON) : defaults;

  return themes[name];
}

export function toggle(name) {
  const next = name === 'light' ? 'dark' : 'light';
  const theme = read(next);

  return theme;
}
