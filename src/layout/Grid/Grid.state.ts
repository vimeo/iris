export function initialState() {
  return {
    gridGap: 24,
    draggedFrom: null,
    draggedTo: null,
    originalOrder: null,
    updatedOrder: null,
  };
}

export function reducer(state, { type, payload = null }) {
  switch (type) {
    case 'SET_GRID_GAP':
      return {
        ...state,
        gridGap: payload,
      };
    case 'START_DRAG':
      return {
        ...state,
        draggedFrom: payload.position,
        originalOrder: payload.list,
      };
    case 'SET_LIST_ORDER':
      return {
        ...state,
        updatedOrder: payload.list,
        draggedTo: payload.position,
      };
    case 'END_DRAG':
      return {
        ...state,
        draggedFrom: null,
        draggedTo: null,
      };
  }
}
