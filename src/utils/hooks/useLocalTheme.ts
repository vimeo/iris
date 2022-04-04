import { useGlobalTheme } from './useGlobalTheme';

export function useLocalTheme(local) {
  const global = useGlobalTheme();

  Object.keys(local).map(
    (a) =>
      global[a] &&
      typeof local[a] === 'object' &&
      Object.keys(local[a]).map((b) => (global[a][b] = local[a][b]))
  );

  return global;
}
