export function reducer(duration) {
  return (state, action) => {
    switch (action) {
      case 'PAUSE':
        return {
          ...state,
          active: false,
        };
      case 'RESUME':
        return {
          ...state,
          active: true,
        };
      case 'RESET':
        return {
          ...state,
          time: duration,
        };
      case 'TICK':
        return {
          ...state,
          time: state.time - 100,
        };
      case 'HIDE':
        return {
          ...state,
          showing: false,
        };
      case 'SHOW':
        return {
          ...state,
          showing: true,
        };
    }
  };
}
