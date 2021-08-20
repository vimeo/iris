export function initialState(bottom) {
  return {
    itemHeight: 0,
    visibleRange: [0, bottom],
    scrollDistance: 0,
  };
}

export function reducer(state, { type, payload = null }) {
  switch (type) {
    case 'SET_ITEM_HEIGHT':
      return {
        ...state,
        itemHeight: payload,
      };
    case 'SET_VISIBLE_RANGE':
      return {
        ...state,
        visibleRange: payload,
      };
    case 'SET_SCROLL_DISTANCE':
      return {
        ...state,
        scrollDistance: payload,
      };
  }
}
