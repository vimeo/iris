import React from 'react';

import { Props } from './Select.types';
import { Minors, Option } from './Select.minors';
import { ChevronDown, SelectStyled } from './Select.style';
import { SelectFaux } from './SelectFaux';

import { Wrapper } from '../Wrapper/Wrapper';

import { withIris, useLayoutStyles, Focus } from '../../../utils';

export const Select = withIris<HTMLSelectElement, Props, Minors>(
  SelectComponent
);

Select.Option = Option;

function SelectComponent({ forwardRef, faux, ...props }: Props) {
  return faux ? (
    <SelectFaux forwardRef={forwardRef} {...props} />
  ) : (
    <SelectNative forwardRef={forwardRef} {...props} />
  );
}

function SelectNative({
  children,
  className,
  defaultValue,
  disabled,
  format = 'basic',
  forwardRef,
  id,
  label,
  messages,
  pill,
  size = 'md',
  status,
  style,
  ...props
}: Props) {
  const [layoutStyles, displayStyles] = useLayoutStyles(style);

  return (
    <Wrapper
      className={className}
      id={id}
      label={label}
      messages={messages}
      status={status}
      style={{ ...layoutStyles }}
    >
      <div style={{ position: 'relative' }}>
        <SelectStyled
          defaultValue={defaultValue}
          disabled={disabled}
          format={status || format}
          inputSize={size}
          pill={pill}
          ref={forwardRef}
          style={{ ...displayStyles }}
          {...props}
        >
          {children}
        </SelectStyled>
        <Focus parent={SelectStyled} radius={pill ? 50 : 6} />
        <ChevronDown size={size} />
      </div>
    </Wrapper>
  );
}
