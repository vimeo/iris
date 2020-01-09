import { parseToHsl, rgb } from 'polished';

import { colorSpaces, roundValues } from '../../../color';

export function reducer(state, { type, payload = null }) {
  switch (type) {
    case 'TOGGLE':
      return {
        ...state,
        open: !state.open,
      };
    case 'DRAG_START':
      return {
        ...state,
        dragging: true,
      };
    case 'DRAG_END':
      return {
        ...state,
        dragging: false,
      };
    case 'SET_COORDS':
      return {
        ...state,
        coords: payload,
      };
    case 'SET_HEX':
      try {
        const HSL = parseToHsl(payload);
        const { HSV, HEX, RGB } = colorSpaces(HSL);

        return { ...state, HSL, HSV, HEX, RGB };
      } catch {
        return state;
      }
    case 'SET_RGB':
      try {
        const HSL = roundValues(parseToHsl(rgb(payload)));
        const { HSV, HEX, RGB } = colorSpaces(HSL);

        return { ...state, HSL, HSV, HEX, RGB };
      } catch {
        return state;
      }
    case 'SET_HSL':
      try {
        const HSL = payload;
        const { HSV, HEX, RGB } = colorSpaces(HSL);

        return { ...state, HSL, HSV, HEX, RGB };
      } catch {
        return state;
      }
    default:
      throw new Error();
  }
}
