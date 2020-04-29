import React, {
  FocusEventHandler,
  useState,
  useImperativeHandle,
  useRef,
} from 'react';

import { nullStyle, InputStyled } from './Input.style';
import { Props } from './Input.types';

import { Wrapper } from '../Wrapper/Wrapper';

import { Focus, useLayoutStyles } from '../../../utils';

export function Text({
  autocomplete = true,
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
  theme,
  type = 'text',
  value,
  ...props
}: Props) {
  const [focused, setFocused] = useState(false);
  const [layoutStyles, displayStyles] = useLayoutStyles(style);

  const inputRef = useRef(null);
  useImperativeHandle(forwardRef as any, () => inputRef.current);

  const doFocus: FocusEventHandler = () => setFocused(true);
  const doBlur: FocusEventHandler = () => setFocused(false);

  const floatLabel =
    focused ||
    (inputRef.current && inputRef.current.value.length > 0);

  return (
    <Wrapper
      className={className}
      floating={floating}
      floatLabel={floatLabel}
      label={label}
      messages={messages}
      status={status}
      theme={theme}
      style={layoutStyles}
    >
      <div style={{ position: 'relative' }}>
        {children}
        <InputStyled
          aria-invalid={status === 'negative'}
          autoComplete={autocomplete ? 'on' : 'off'}
          floating={floating}
          format={status}
          id={id}
          inputSize={size}
          onBlur={doBlur}
          onFocus={doFocus}
          pill={pill}
          ref={inputRef}
          style={displayStyles}
          theme={theme}
          type={type}
          value={value}
          {...props}
        />
        <Focus parent={InputStyled} radius={pill ? 50 : 6} />
      </div>
    </Wrapper>
  );
}
