import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export function useLocalTheme(local) {
  const global = useContext(ThemeContext);

  Object.keys(local).map(
    (a) =>
      global[a] &&
      typeof local[a] === 'object' &&
      Object.keys(local[a]).map((b) => (global[a][b] = local[a][b]))
  );

  return global;
}
