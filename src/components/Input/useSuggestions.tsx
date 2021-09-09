import React from 'react';

import styled from 'styled-components';
import { rgba } from 'polished';

import { Header as H } from '../../typography';
import { blue } from '../../color';
import { Focus } from '../../utils';

export function useSuggestions({ autosuggest, inputRef, doBlur }) {
  if (typeof autosuggest === 'undefined') return;
  if (autosuggest === null) return { has: true, show: false };

  function select(suggestion = null) {
    if (suggestion) inputRef.current.value = suggestion;
    inputRef?.current?.focus();
  }

  function onClick(suggestion) {
    return (event) => {
      select(suggestion);
      doBlur(event);
    };
  }

  function onKeyDown(suggestion) {
    return (event) => {
      event.preventDefault();

      switch (event.key) {
        case 'Escape':
          return select();
        case 'ArrowDown':
          return event.target?.nextSibling?.focus();
        case 'ArrowUp':
          return event.target?.previousSibling?.focus();
        case 'Enter':
          return select(suggestion);
      }
    };
  }

  const suggestions = autosuggest?.map((suggestion) => (
    <Suggestion
      onKeyDown={onKeyDown(suggestion)}
      onClick={onClick(suggestion)}>
      {suggestion}
    </Suggestion>
  ));

  suggestions.has = true;
  suggestions.show = suggestions?.length > 0;

  return suggestions;
}

function Suggestion({ children, ...props }) {
  return (
    <Header {...props}>
      {children}
      <Focus parent={Header} />
    </Header>
  );
}

const Header = styled(H).attrs({
  variant: 'thin',
  size: '2',
  // Temporary hack for accessibility. I don't want to
  // change the types to explicitly permit button Headers.
  // @ts-ignore
  element: 'button',
})`
  position: relative;
  padding: 0.5rem 2rem;
  width: 100%;
  text-align: left;
  margin: 0;
  cursor: pointer;

  font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizelegibility;

  &:first-child {
    padding: 0.75rem 2rem 0.5rem;
  }

  &:last-child {
    padding: 0.5rem 2rem 0.75rem;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${rgba(blue(500), 0.15)};
  }
`;
