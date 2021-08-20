import { parseToHsl, rgb } from 'polished';

import { colorSpaces } from '../../color';

export interface State {
  colorMeta: { HEX: any; RGB: any; HSL: any; HSV: any };
  colorSpace: 'HEX' | 'RGB' | 'HSL';
  coords: [number, number];
  dragging: boolean;
  editing: boolean;
  error: boolean;
  open: boolean;
}

export function reducer(state: State, { type, payload = null }) {
  switch (type) {
    case 'TOGGLE':
      return { ...state, open: !state.open };
    case 'CLOSE':
      return { ...state, open: false };
    case 'DRAG_START':
      return { ...state, dragging: true };
    case 'DRAG_END':
      return { ...state, dragging: false };
    case 'SET_COORDS':
      return { ...state, coords: payload };
    case 'SET_COLORSPACE':
      return { ...state, colorSpace: payload };
    case 'SET_ERROR':
      return { ...state, error: payload };
    case 'SET_EDITING':
      return { ...state, editing: payload };
    case 'SET_LAST':
      return state;

    case 'SET_HEX':
      try {
        const colorMeta = reduceColorMeta(payload);
        return { ...state, colorMeta };
      } catch {
        return state;
      }

    case 'SET_RGB':
      try {
        const colorMeta = reduceColorMeta(payload);
        return { ...state, colorMeta };
      } catch {
        return state;
      }

    case 'SET_HSL':
      try {
        const colorMeta = reduceColorMeta(payload);
        return { ...state, colorMeta };
      } catch {
        return state;
      }

    default:
      throw new Error();
  }
}

function reduceColorMeta(payload) {
  if (typeof payload === 'string') payload = parseToHsl(payload);
  if (payload.red) payload = parseToHsl(rgb(payload));

  const { HSL, HSV, HEX, RGB } = colorSpaces(payload);
  const colorMeta = { HSL, HSV, HEX, RGB };

  return colorMeta;
}
