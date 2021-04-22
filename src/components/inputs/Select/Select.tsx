import React from 'react';

import { Props } from './Select.types';
import { Minors, Option } from './Select.minors';
import { ChevronDown, SelectStyled } from './Select.style';
import { SelectFaux } from './SelectFaux';

import { Wrapper } from '../Wrapper/Wrapper';

import { withIris, useLayoutStyles } from '../../../utils';

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
  id,
  size = 'md',
  format = 'basic',
  forwardRef,
  defaultValue,
  status,
  messages,
  label,
  style,
  disabled,
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
          inputSize={size}
          ref={forwardRef}
          format={status || format}
          style={{ ...displayStyles }}
          disabled={disabled}
          {...props}
        >
          {children}
        </SelectStyled>
        <ChevronDown size={size} />
      </div>
    </Wrapper>
  );
}
