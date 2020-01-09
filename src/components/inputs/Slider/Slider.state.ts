export const initialState = initialValues => ({
  values: [initialValues[0], initialValues[1]],
  dragging: false,
});

export function reducer(state, { type, payload = null }) {
  switch (type) {
    case 'SET_VALUES':
      return {
        ...state,
        values: payload,
      };
    case 'SET_TRACK_RECT':
      return {
        ...state,
        trackRect: payload,
      };
    case 'SET_DRAGGING':
      return {
        ...state,
        dragging: payload,
      };
    case 'SET_FOCUS': {
      return {
        ...state,
        focused: payload,
      };
    }
  }
}
