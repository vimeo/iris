import React, {
  useRef,
  useLayoutEffect,
  useImperativeHandle,
  cloneElement,
  ReactElement,
  useReducer,
  useEffect,
} from 'react';

import { Props } from './Select.types';
import {
  ChevronDown,
  SelectStyled,
  Placeholder,
} from './Select.style';
import { reducer, init } from './Select.state';

import { Wrapper } from '../Wrapper/Wrapper';

import {
  geometry,
  useLayoutStyles,
  useOutsideClick,
} from '../../../utils';
import { PopOver } from '../../PopOver/PopOver';

export function SelectFaux({
  children,
  className,
  defaultValue,
  disabled,
  format = 'basic',
  forwardRef,
  id,
  label,
  messages,
  placeholder = 'Please select an option.',
  size = 'md',
  status,
  style,
  maxHeight = '100%',
  value,
  ...props
}: Props) {
  const [state, dispatch] = useReducer(reducer, init(defaultValue));
  const { width, selected, active } = state;

  const [layoutStyles, displayStyles] = useLayoutStyles(style);
  const wrapperRef = useRef(null);
  const popOverRef = useRef(null);
  const selectRef = useRef(null);

  useImperativeHandle(forwardRef, () => selectRef.current);
  useOutsideClick([wrapperRef, popOverRef], () =>
    dispatch({ type: 'SET_ACTIVE', payload: false })
  );

  useLayoutEffect(() => {
    const payload = geometry(wrapperRef.current).width;
    dispatch({ type: 'SET_WIDTH', payload });
  }, [size]);

  useEffect(() => {
    if (value !== selected) {
      if (typeof value !== 'undefined') {
        dispatch({ type: 'SET_SELECTED', payload: value });
      } else if (selected) {
        dispatch({ type: 'SET_SELECTED', payload: selected });
      }
    }
  }, [value, selected]);

  function onClick(child) {
    return () => {
      if (child.props.disabled) return;

      const event = new Event('change', { bubbles: true });
      selectRef.current.value = child.props.value;
      selectRef.current.dispatchEvent(event);

      dispatch({ type: 'SET_SELECTED', payload: child.props.value });
      dispatch({ type: 'SET_ACTIVE', payload: false });
    };
  }

  const options = (children as ReactElement[])
    .filter((child) => child.type !== 'a')
    .map(makeOption);

  const content = (
    <div>
      {children.map((child: ReactElement, i) => {
        return typeof (child as ReactElement).type === 'string'
          ? child
          : cloneElement(child as ReactElement, {
              onClick: onClick(child),
              key: i,
              faux: true,
            });
      })}
    </div>
  );

  return (
    <Wrapper
      className={className}
      id={id}
      label={label}
      ref={wrapperRef}
      messages={messages}
      status={status}
      style={{ ...layoutStyles }}
    >
      <PopOver
        attach="bottom"
        style={{
          width,
          maxWidth: '100%',
          maxHeight,
          overflowY: 'scroll',
        }}
        content={<div ref={popOverRef}>{content}</div>}
        active={disabled ? false : active}
      >
        <div
          style={{ position: 'relative', cursor: 'pointer' }}
          onClick={() => dispatch({ type: 'TOGGLE_ACTIVE' })}
        >
          {!selected && (
            <Placeholder
              inputSize={size}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
              }}
            >
              {placeholder}
            </Placeholder>
          )}
          <SelectStyled
            aria-label={label}
            format={status || format}
            disabled={disabled}
            inputSize={size}
            readOnly
            ref={selectRef}
            value={selected?.toString()}
            style={{
              ...displayStyles,
              pointerEvents: 'none',
              opacity: selected ? 1 : 0,
            }}
            {...props}
          >
            {selected}
            {options}
          </SelectStyled>

          <ChevronDown size={size} />
        </div>
      </PopOver>
    </Wrapper>
  );
}

function makeOption({ props: { value, children } }, i) {
  return (
    <option key={i} value={value}>
      {Array.isArray(children)
        ? children.filter((cc) => typeof cc === 'string')
        : children}
    </option>
  );
}
