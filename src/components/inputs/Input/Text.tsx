import React, {
  useState,
  useImperativeHandle,
  useRef,
  MouseEvent,
} from 'react';

import { nullStyle, InputStyled } from './Input.style';
import { Props } from './Input.types';
import { useSuggestions } from './useSuggestions';

import { Wrapper } from '../Wrapper/Wrapper';

// Iris submodule organization needs to be reconsidered.
// This creates a circular dependency.
// import { PopOver } from '../../../layout';
import { PopOver } from '../../../layout/PopOver/PopOver';
import {
  Focus,
  useLayoutStyles,
  useOutsideClick,
} from '../../../utils';

export function Text({
  autoComplete = true,
  autosuggest,
  children,
  className,
  disabled,
  floating = false,
  id,
  label,
  messages,
  forwardRef,
  name,
  pill = false,
  size = 'md',
  status,
  style = nullStyle,
  onFocus,
  onBlur,
  theme,
  type = 'text',
  value,
  variant,
  ...props
}: Props) {
  const [focused, setFocused] = useState(false);
  const [layoutStyles, displayStyles] = useLayoutStyles(style);

  const inputRef = useRef(null);
  useImperativeHandle(forwardRef as any, () => inputRef.current);

  const suggestionsRef = useRef(null);
  const suggestions = useSuggestions({
    autosuggest,
    inputRef,
    doBlur,
  });

  function doFocus(e) {
    setFocused(true);
    onFocus && onFocus(e);
  }

  function doBlur(e) {
    setFocused(false);
    onBlur && onBlur(e);
  }

  function onKeyDown(e) {
    if (e.key === 'Tab') doBlur(e);

    if (!autosuggest) return;
    if (e.key === 'Enter' || e.key === 'ArrowDown') {
      e.preventDefault();
      suggestionsRef?.current.children[0].focus();
    }
  }

  const floatLabel =
    focused ||
    (inputRef.current && inputRef.current.value?.length > 0);

  const refs = [inputRef, suggestionsRef];
  useOutsideClick(refs, (e: MouseEvent) => doBlur(e));

  if (autoComplete === true) autoComplete = 'on';
  if (autoComplete === false) autoComplete = 'off';

  const inputComponent = (
    <div style={{ position: 'relative' }}>
      {children}
      <InputStyled
        aria-invalid={status === 'negative'}
        autoComplete={autoComplete}
        disabled={disabled}
        floating={floating}
        format={status}
        id={id}
        inputSize={size}
        onFocus={doFocus}
        onKeyDown={onKeyDown}
        pill={pill}
        ref={inputRef}
        style={displayStyles}
        theme={theme}
        type={type}
        value={value}
        variant={variant}
        {...props}
      />
      <Focus
        parent={InputStyled}
        radius={pill ? 50 : 6}
        variant={variant}
      />
    </div>
  );

  const inputComponentWithAutoSuggest = (
    <PopOver
      active={focused && suggestions?.show}
      content={
        <div ref={suggestionsRef}>
          {suggestions?.[0] && suggestions}
        </div>
      }
    >
      {inputComponent}
    </PopOver>
  );

  return (
    <Wrapper
      className={className}
      disabled={disabled}
      floating={floating}
      floatLabel={floatLabel}
      id={id}
      label={label}
      messages={messages}
      size={size}
      status={status}
      style={layoutStyles}
      theme={theme}
    >
      {suggestions?.has
        ? inputComponentWithAutoSuggest
        : inputComponent}
    </Wrapper>
  );
}
