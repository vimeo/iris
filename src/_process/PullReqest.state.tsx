export function initialState() {
  return {
    branchName: '',
    description: '',
    comments: '',
    meta: '',
  };
}

export function reducer(state, { type, payload = null }) {
  switch (type) {
    case 'SET_BRANCH_NAME':
      return {
        ...state,
        branchName: payload,
      };
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: payload,
      };
    case 'SET_COMMENTS':
      return {
        ...state,
        comments: payload,
      };
    case 'SET_META':
      return {
        ...state,
        meta: payload,
      };
  }
}
