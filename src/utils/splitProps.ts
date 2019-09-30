import { CSSProperties } from 'react';

export function splitStyleProps(
  className: string = null,
  style: CSSProperties = null,
) {
  const {
    bottom,
    display,
    float,
    height,
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    position,
    top,
    width,
    alignSelf,
    flex,
    flexBasis,
    flexGrow,
    flexShrink,
    gridArea,
    gridColumn,
    gridColumnEnd,
    gridColumnStart,
    gridRow,
    gridRowEnd,
    gridRowStart,
    justifySelf,
    placeSelf,
    ...filteredStyles
  }: CSSProperties = style || {};

  const layoutStyles = {
    bottom,
    className,
    display,
    float,
    height,
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    position,
    top,
    width,
    alignSelf,
    flex,
    flexBasis,
    flexGrow,
    flexShrink,
    gridArea,
    gridColumn,
    gridColumnEnd,
    gridColumnStart,
    gridRow,
    gridRowEnd,
    gridRowStart,
    justifySelf,
    placeSelf,
  };

  return [layoutStyles, filteredStyles];
}
