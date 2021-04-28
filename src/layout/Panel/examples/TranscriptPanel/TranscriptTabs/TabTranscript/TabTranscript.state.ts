export const initialState = {
  height: 0,
  width: 0,
  visibleStartIndex: 0,
  visibleStopIndex: 0,
  scrollDirection: 'forward',
};

export function reducer(state, { type, payload = null }) {
  switch (type) {
    case 'SET_HEIGHT':
      return {
        ...state,
        height: payload,
      };
    case 'SET_WIDTH':
      return {
        ...state,
        width: payload,
      };
    case 'SET_VISIBLE_START_INDEX':
      return {
        ...state,
        visibleStartIndex: payload.visibleStartIndex,
      };
    case 'SET_VISIBLE_STOP_INDEX':
      return {
        ...state,
        visibleStopIndex: payload.visibleStopIndex,
      };
    case 'SET_SCROLL_DIRECTION':
      return {
        ...state,
        scrollDirection: payload.scrollDirection,
      };
  }
}
