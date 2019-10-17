import React from 'react';

import { nullStyle, Faux, radii } from './Input.style';
import { Props } from './Input.types';

import { HiddenMark, Label } from '../Shared';
import { Focus } from '../../../utils';
import { Wrapper } from '../Wrapper/Wrapper';

export function Mark({
  autocomplete = true,
  disabled,
  floating = false,
  forwardRef,
  id,
  label,
  messages,
  name,
  size = 'md',
  status,
  style = nullStyle,
  theme,
  type,
  value,
  ...props
}: Props) {
  return (
    <Wrapper
      theme={theme}
      status={status}
      messages={messages}
      onKeyUp={a11yKey}
    >
      <HiddenMark
        id={id}
        type={type}
        disabled={disabled}
        ref={forwardRef}
        {...props}
      />
      <Label
        htmlFor={id}
        format={status}
        disabled={disabled}
        size={size}
        theme={theme}
        type={type}
        fauxMark={Faux}
      >
        {label}
      </Label>
      <Faux size={size} type={type} theme={theme} disabled={disabled}>
        <Focus
          parent={HiddenMark}
          radius={radii[type]}
          theme={theme}
        />
      </Faux>
    </Wrapper>
  );
}

function a11yKey({ key, target }) {
  if (key === 'Enter' || key.includes('Arrow')) {
    target.checked = !target.checked;
  }
}
