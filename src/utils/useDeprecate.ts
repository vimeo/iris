export function useDeprecate(props, deprecated) {
  if (process.env.NODE_ENV !== 'development') return;

  Object.entries(deprecated).map(
    ([prop, warning]) =>
      typeof props[prop] !== 'undefined' && console.warn(warning),
  );
}
