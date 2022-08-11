import React, {
  useRef,
  useEffect,
  useReducer,
  MutableRefObject,
  Ref,
} from 'react';

import { InputProps, Props } from './Text.types';
import { Text as Styled, Input } from './Text.style';

import {
  geometry,
  Focus,
  useLayoutStyles,
  withIris,
} from '../../utils';

export const EditableText = withIris<HTMLInputElement, InputProps>(
  EditableTextComponent
);

function EditableTextComponent({
  children,
  className,
  element = 'span',
  format = 'soft',
  forwardRef,
  onBlur,
  onChange,
  onFocus,
  onKeyUp,
  placeholder,
  size,
  style,
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

  const [layoutStyles, displayStyles] = useLayoutStyles(style);

  useEffect(() => {
    const { width: payload } = geometry(textRef.current);
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
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        ...layoutStyles,
      }}
      className={className}
    >
      <Styled
        as={element}
        children={text.length > 0 ? text : placeholder}
        className={className}
        format={format}
        onClick={doFocus}
        ref={textRef}
        size={size}
        {...(props as Props)}
        style={{
          ...displayStyles,
          opacity: focus ? 0 : 1,
          margin: 0,
        }}
      />
      <Input
        className={className}
        defaultValue={text}
        format={format}
        onBlur={doBlur}
        onChange={doChange}
        onFocus={doFocus}
        onKeyUp={doKeyUp}
        ref={assignRefs(forwardRef, inputRef)}
        size={size}
        type="text"
        {...(props as Props)}
        style={{
          ...displayStyles,
          width,
          opacity: focus ? 1 : 0,
          margin: 0,
        }}
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

const withSpaces = (string) => string.replace(/ /g, '\u00a0');

function assignRefs<T>(...refs: Ref<T>[]) {
  return function (node: T) {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as MutableRefObject<T>).current = node;
      }
    }
  };
}
