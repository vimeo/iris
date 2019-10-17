export function reducer(state, { type, payload = null }) {
  switch (type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: payload,
      };
    case 'SET_WARNING':
      return {
        ...state,
        warning: payload,
      };
    case 'SET_REMAINING_CHARACTERS':
      console.log(payload);
      return {
        ...state,
        remainingCharacters: payload,
      };
  }
}
