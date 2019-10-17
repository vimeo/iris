import React, { useReducer, ChangeEventHandler, FC } from 'react';

import { reducer } from './withCharacterCount.state';
import { Counter } from './withCharacterCount.style';

interface Props {
  maxCharacters?: number;
  onChange?: ChangeEventHandler;
  onError?: ChangeEventHandler;
  onWarn?: ChangeEventHandler;
  plural?: string;
  singular?: string;
  warningThreshold?: number;
}

export function withCharacterCount<P = {}>(Component: FC<P>) {
  return function({
    maxCharacters = 30,
    onChange,
    onError,
    onWarn,
    plural = 'characters',
    singular = 'character',
    warningThreshold = 5,
    ...props
  }: Props & P) {
    const intitialState = { remainingCharacters: maxCharacters };

    const [state, dispatch] = useReducer(reducer, intitialState);
    const { error, warning, remainingCharacters } = state;

    const charactersString =
      Math.abs(remainingCharacters) === 1 ? singular : plural;

    function doWarn(event, payload = true) {
      dispatch({
        type: 'SET_WARNING',
        payload,
      });
      onWarn && onWarn(event);
    }

    function doError(event, payload = true) {
      dispatch({
        type: 'SET_ERROR',
        payload,
      });
      onError && onError(event);
    }

    function clean(event) {
      doError(event, false);
      doWarn(event, false);
    }

    function doChange(event) {
      const remaining = maxCharacters - event.target.value.length;
      if (remaining < 0) doError(event);
      else if (remaining <= warningThreshold) doWarn(event);
      else clean(event);

      dispatch({
        type: 'SET_REMAINING_CHARACTERS',
        payload: remaining,
      });

      onChange && onChange(event);
    }

    const messages = {
      post: (
        <Counter error={error} warning={warning}>
          {remainingCharacters} {charactersString}
        </Counter>
      ),
    };

    return (
      <Component
        {...(props as P)}
        onChange={doChange}
        messages={messages}
      />
    );
  };
}
