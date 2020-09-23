import { CSSProperties } from 'react';

export function useLayoutStyles(style: CSSProperties = null) {
  if (!style) return [null];

  const layout = true;
  const display = true;

  const layoutStyles: CSSProperties = split({ style, layout });
  const displayStyles: CSSProperties = split({ style, display });

  return [layoutStyles, displayStyles];
}

function split({ style, layout = false, display = false }) {
  const layoutStyles = {};
  const displayStyles = {};

  Object.keys(style).map((key) =>
    layoutProperties.includes(key)
      ? (layoutStyles[key] = style[key])
      : (displayStyles[key] = style[key])
  );

  if (layout) return { ...layoutStyles };
  if (display) return { ...displayStyles };
  else console.warn('Style split type not provided!');
}

const layoutProperties = [
  'alignSelf',
  'bottom',
  'display',
  'flex',
  'flexBasis',
  'float',
  'height',
  'margin',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'position',
  'top',
  'width',
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
