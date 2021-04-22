export function initialState() {
  return {
    linkName: '',
    description: '',
    steps: '',
    affectedPlatforms: 'All browsers and operating systems',
    iris: '',
    app: '',
    browser: '',
    os: '',
    meta: '',
  };
}

export function reducer(state, { type, payload = null }) {
  switch (type) {
    case 'SET_LINK_NAME':
      return {
        ...state,
        linkName: payload,
      };
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: payload,
      };
    case 'SET_STEPS':
      return {
        ...state,
        steps: payload,
      };
    case 'SET_AFFECTED_PLATFORMS':
      return {
        ...state,
        affectedPlatforms: payload,
      };
    case 'SET_IRIS':
      return {
        ...state,
        iris: payload,
      };
    case 'SET_APP':
      return {
        ...state,
        app: payload,
      };
    case 'SET_BROWSER':
      return {
        ...state,
        browser: payload,
      };
    case 'SET_OS':
      return {
        ...state,
        os: payload,
      };
    case 'SET_META':
      return {
        ...state,
        meta: payload,
      };
  }
}
