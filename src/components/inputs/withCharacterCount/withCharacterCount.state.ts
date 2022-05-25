export function reducer(state, { type, payload = null }) {
  switch (type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: payload,
        warning: false,
      };
    case 'SET_WARNING':
      return {
        ...state,
        warning: payload,
        error: false,
      };
    case 'SET_REMAINING_CHARACTERS':
      return {
        ...state,
        remainingCharacters: payload,
      };
  }
}
