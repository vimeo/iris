import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export function useGlobalTheme() {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error('No theme detected!');
  }

  return theme;
}
