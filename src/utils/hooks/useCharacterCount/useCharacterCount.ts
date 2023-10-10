import { useReducer, useCallback } from 'react';

import {
  reducer,
  CharacterCountState,
  UserAction,
} from './useCharacterCount.state';

export interface UseCharacterCountInit {
  value?: string;
  /** Max number of characters allowed */
  maxCharacters?: number;
  /** Shows warning color when threshold is met */
  warningThreshold?: number;
}

export interface UseCharacterCount {
  state: CharacterCountState;
  dispatch: React.Dispatch<UserAction>;
  handleChange: (value: string) => void;
  clean: () => void;
}

/**
 * Based on withCharacterCount, this provides handlers for a character count message to create a controlled component.
 * Helpful to use in conjuction with custom inputs that need more control of input messages
 */

export function useCharacterCount({
  maxCharacters = 10,
  warningThreshold = 5,
}: UseCharacterCountInit): UseCharacterCount {
  const [state, dispatch] = useReducer(reducer, {
    remainingCharacters: maxCharacters,
  });

  function handleError() {
    dispatch({
      type: 'SET_ERROR',
    });
  }

  function handleWarn() {
    dispatch({
      type: 'SET_WARNING',
    });
  }

  const clean = useCallback(() => {
    dispatch({
      type: 'RESET_STATUS',
    });
  }, []);

  const handleChange = useCallback(
    (value: string) => {
      const remaining = maxCharacters - value.length;
      if (remaining <= warningThreshold && remaining > 0)
        handleWarn();
      else if (remaining <= 0) handleError();
      else clean();

      dispatch({
        type: 'SET_REMAINING_CHARACTERS',
        payload: remaining,
      });
    },
    [clean, maxCharacters, warningThreshold]
  );

  return {
    state,
    dispatch,
    handleChange,
    clean,
  };
}
