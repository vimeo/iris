import React, { useReducer, FC } from 'react';

import { Props } from './withCharacterCount.types';
import { reducer } from './withCharacterCount.state';
import { Counter } from './withCharacterCount.style';

export function withCharacterCount<P = {}>(Component: FC<P>) {
  return function({
    defaultValue,
    maxCharacters = 30,
    onChange,
    onError,
    onWarn,
    plural = 'characters',
    singular = 'character',
    warningThreshold = 5,
    messages,
    ...props
  }: Props & P) {
    const intitialState = {
      remainingCharacters: defaultValue
        ? maxCharacters - defaultValue.length
        : maxCharacters,
    };

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

    const countMessage = (
      <Counter error={error} warning={warning}>
        {remainingCharacters} {charactersString}
      </Counter>
    );

    return (
      <Component
        {...(props as P)}
        defaultValue={defaultValue}
        onChange={doChange}
        messages={messages ? messages : { post: countMessage }}
      />
    );
  };
}
