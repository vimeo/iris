import { CSSProperties } from 'react';

export function useLayoutStyles(style: CSSProperties = null) {
  if (!style) return [null];

  const layoutStyles: CSSProperties = splitStyles({
    style,
    layout: true,
  });

  const displayStyles: CSSProperties = splitStyles({
    style,
    display: true,
  });

  return [layoutStyles, displayStyles];
}

function splitStyles({ style, layout = false, display = false }) {
  let layoutStyles = {};
  let displayStyles = {};

  Object.keys(style).map(key =>
    layoutProperties.includes(key)
      ? (layoutStyles[key] = style[key])
      : (displayStyles[key] = style[key]),
  );

  if (layout) return { ...layoutStyles };
  if (display) return { ...displayStyles };
  else console.warn('Style split type not provided!');
}

const layoutProperties = [
  'bottom',
  'display',
  'float',
  'height',
  'margin',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'position',
  'top',
  'width',
  'alignSelf',
  'flex',
  'flexBasis',
  'flexGrow',
  'flexShrink',
  'gridArea',
  'gridColumn',
  'gridColumnEnd',
  'gridColumnStart',
  'gridRow',
  'gridRowEnd',
  'gridRowStart',
  'justifySelf',
  'placeSelf',
];
