export function initialState() {
  return {
    iconName: '',
    description: '',
    meta: '',
  };
}

export function reducer(state, { type, payload = null }) {
  switch (type) {
    case 'SET_ICON_NAME':
      return {
        ...state,
        iconName: payload,
      };
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: payload,
      };
    case 'SET_META':
      return {
        ...state,
        meta: payload,
      };
  }
}
