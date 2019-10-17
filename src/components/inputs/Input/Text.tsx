import React, {
  FocusEventHandler,
  ChangeEventHandler,
  useState,
  useImperativeHandle,
  useRef,
} from 'react';

import { nullStyle, InputStyled } from './Input.style';
import { Props } from './Input.types';

import { Wrapper } from '../Wrapper/Wrapper';

import { Focus } from '../../../utils';

export function Text({
  autocomplete = true,
  disabled,
  floating = false,
  id,
  label,
  messages,
  forwardRef,
  name,
  size = 'md',
  status,
  style = nullStyle,
  theme,
  type = 'text',
  value,
  ...props
}: Props) {
  const [focused, setFocused] = useState(false);
  const { margin, display, ...splitStyles } = style;

  const inputRef = useRef(null);
  useImperativeHandle(forwardRef as any, () => inputRef.current);

  const doFocus: FocusEventHandler = () => setFocused(true);
  const doBlur: FocusEventHandler = () => setFocused(false);
  const doChange: ChangeEventHandler<HTMLInputElement> = e =>
    console.log(e.target.value);

  const floatLabel =
    focused ||
    (inputRef.current && inputRef.current.value.length > 0);

  return (
    <Wrapper
      floating={floating}
      floatLabel={floatLabel}
      label={label}
      messages={messages}
      status={status}
      theme={theme}
    >
      <div style={{ position: 'relative', margin, display }}>
        <InputStyled
          aria-invalid={status === 'negative'}
          autoComplete={autocomplete ? 'on' : 'off'}
          floating={floating}
          format={status}
          inputSize={size}
          onBlur={doBlur}
          onChange={doChange}
          onFocus={doFocus}
          ref={inputRef}
          style={splitStyles}
          theme={theme}
          type={type}
          value={value}
          {...props}
        />
        <Focus parent={InputStyled} />
      </div>
    </Wrapper>
  );
}
