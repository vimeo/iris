export interface State {
  width: number;
  selected: number;
  active: boolean;
}

type Action = {
  type: string;
  payload?: any;
};

export const init = (defaultValue) => ({
  width: 0,
  selected: defaultValue || 0,
  active: false,
});

export function reducer(
  state: State,
  { type, payload = null }: Action
): State {
  switch (type) {
    case 'SET_WIDTH':
      return {
        ...state,
        width: payload,
      };
    case 'SET_SELECTED':
      return {
        ...state,
        selected: payload,
      };
    case 'SET_ACTIVE': {
      return {
        ...state,
        active: payload,
      };
    }
    case 'TOGGLE_ACTIVE': {
      return {
        ...state,
        active: !state.active,
      };
    }
  }
}
