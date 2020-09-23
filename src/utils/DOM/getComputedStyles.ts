import CSS from 'csstype';

// import { CSSProperties } from 'react';
// React CSSProperties type exports camelCased keys.
type CSSProperties = CSS.StandardLonghandPropertiesHyphen;
type CSSProp = keyof CSSProperties;

export function getComputedStyles(
  element: HTMLElement | null,
  CSSProps: CSSProp[]
) {
  const computed = getComputedStyle(element);
  const CSSProp = (p) => ({ [p]: computed.getPropertyValue(p) });
  const styles = Object.assign({}, ...CSSProps.map(CSSProp));
  return styles;
}
