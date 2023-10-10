export interface CharacterCountState {
  error?: boolean;
  warning?: boolean;
  remainingCharacters?: number;
}

export type UserAction =
  | { type: 'SET_ERROR'; payload?: undefined }
  | { type: 'SET_WARNING'; payload?: undefined }
  | { type: 'RESET_STATUS'; payload?: undefined }
  | { type: 'SET_REMAINING_CHARACTERS'; payload: number };

export function reducer(
  state: CharacterCountState,
  { type, payload }: UserAction
): CharacterCountState {
  switch (type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: true,
        warning: false,
      };
    case 'SET_WARNING':
      return {
        ...state,
        warning: true,
        error: false,
      };
    case 'RESET_STATUS':
      return {
        ...state,
        warning: false,
        error: false,
      };
    case 'SET_REMAINING_CHARACTERS':
      return {
        ...state,
        remainingCharacters: payload,
      };
  }
}
