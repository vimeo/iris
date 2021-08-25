export function useStyleVars(css) {
  const styles = {};

  for (const property in css) {
    let value = css[property];

    if (typeof value === 'number') {
      value = value + 'px';
    }

    styles['--' + property] = value;
  }

  return styles;
}
