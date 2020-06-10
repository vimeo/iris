import React, { useRef, useEffect, useReducer } from 'react';

import { InputProps, Props } from './Text.types';
import { Text as Styled, Input } from './Text.style';

import { geometry, Focus } from '../../utils';

export function EditableText({
  children,
  className,
  onBlur,
  onChange,
  onFocus,
  onKeyUp,
  placeholder,
  element = 'span',
  format = 'soft',
  ...props
}: InputProps) {
  const [state, dispatch] = useReducer(reducer, {
    text: children,
    width: 0,
    focus: false,
  });

  const { text, width, focus } = state;

  const textRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const { width: payload } = geometry(textRef);
    if (width !== payload) dispatch(['widthSet', payload]);
  }, [text, width]);

  function doFocus(event) {
    onFocus && onFocus(event);
    dispatch(['focusSet', true]);
    inputRef?.current?.focus();
  }

  function doBlur(event) {
    onBlur && onBlur(event);
    dispatch(['focusSet', false]);
    inputRef?.current?.blur();
  }

  function doChange(event) {
    onChange && onChange(event);
    dispatch(['textSet', event.target.value]);
  }

  function doKeyUp(event) {
    onKeyUp && onKeyUp(event);
    if (event.key === 'Enter') inputRef?.current?.blur();
  }

  return (
    <div style={{ position: 'relative' }}>
      <Styled
        as={element}
        children={text.length > 0 ? text : placeholder}
        className={className}
        format={format}
        onClick={doFocus}
        ref={textRef}
        {...(props as Props)}
        style={{ opacity: focus ? 0 : 1 }}
      />
      <br />
      <Input
        className={className}
        defaultValue={text}
        onBlur={doBlur}
        onChange={doChange}
        onFocus={doFocus}
        onKeyUp={doKeyUp}
        ref={inputRef}
        type="text"
        style={{ width, opacity: focus ? 1 : 0 }}
      />
      <Focus parent={Input} />
    </div>
  );
}

function reducer(state, [type, payload]) {
  switch (type) {
    case 'textSet':
      return { ...state, text: withSpaces(payload) };
    case 'widthSet':
      return { ...state, width: payload };
    case 'focusSet':
      return { ...state, focus: payload };
  }
}

const withSpaces = string => string.replace(/ /g, '\u00a0');
