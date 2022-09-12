import React, { useState, useImperativeHandle, useRef } from 'react';

import { nullStyle, InputStyled } from './Input.style';
import { Props } from './Input.types';
import { useSuggestions } from './useSuggestions';

import { Wrapper } from '../Wrapper/Wrapper';

import { PopOver } from '../../PopOver/PopOver';
import { Focus, useLayoutStyles } from '../../../utils';

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
  const [popoverActive, setPopoverActive] = useState(false);
  const [layoutStyles, displayStyles] = useLayoutStyles(style);

  const inputRef = useRef(null);
  useImperativeHandle(forwardRef as any, () => inputRef.current);

  const suggestionsRef = useRef(null);

  function onSuggestionSelect(selection: string) {
    if (selection) {
      inputRef.current.value = selection;
    }
    inputRef.current.focus();
    setPopoverActive(false);
  }

  const suggestions = useSuggestions({
    autosuggest,
    onSelect: onSuggestionSelect,
  });

  function doFocus(e) {
    setPopoverActive(true);
    onFocus && onFocus(e);
  }

  function doBlur(e) {
    /**
     * If the suggestions popover does not have a secondary target,
     * call the onBlur function and close the suggestions popover
     * (during a blur event, the relatedTarget should be the EventTarget receiving focus, if any)
     */
    if (!suggestionsRef.current?.contains(e.relatedTarget)) {
      onBlur && onBlur(e);
      setPopoverActive(false);
    }
  }

  function onKeyDown(e) {
    if (!autosuggest) return;
    if (e.key === 'Enter' || e.key === 'ArrowDown') {
      e.preventDefault();
      setPopoverActive(true);
      suggestionsRef.current?.firstElementChild?.focus();
    }
  }

  const floatLabel =
    popoverActive ||
    (inputRef.current && inputRef.current.value?.length > 0);

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
        onBlur={doBlur}
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
        distance={1}
      />
    </div>
  );

  const inputComponentWithAutoSuggest = (
    <PopOver
      active={popoverActive && suggestions?.show}
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
