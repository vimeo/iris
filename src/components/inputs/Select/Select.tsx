import React, {
  useRef,
  useLayoutEffect,
  useState,
  useEffect,
  useImperativeHandle,
  cloneElement,
  ReactElement,
  FunctionComponent,
} from 'react';
import styled from 'styled-components';

import { Props, Sizes } from './Select.types';

import { Wrapper } from '../Wrapper/Wrapper';
import { inputShape, inputColors } from '../Shared';

import {
  geometry,
  withIris,
  IrisProps,
  useLayoutStyles,
  useOutsideClick,
} from '../../../utils';
import { ChevronDown as CD } from '../../../icons';
import { PopOver, Pop } from '../../portals/PopOver/PopOver';

export const Select = withIris<HTMLSelectElement, Props, Minors>(
  SelectComponent,
);

function SelectComponent({
  children,
  className,
  id,
  size = 'md',
  format = 'basic',
  forwardRef,
  status,
  messages,
  label,
  faux,
  style,
  ...props
}: Props) {
  const [width, setWidth] = useState(0);
  const [selected, setSelected] = useState(0);
  const [updatedSelected, setUpdatedSelected] = useState(false);
  const [active, setActive] = useState(false);
  const [layoutStyles, displayStyles] = useLayoutStyles(style);
  const wrapperRef = useRef(null);
  const popOverRef = useRef(null);
  const selectRef = useRef(null);

  useImperativeHandle(forwardRef, () => selectRef.current);

  useLayoutEffect(
    () => faux && setWidth(geometry(wrapperRef).width),
    [size, faux],
  );

  useOutsideClick(popOverRef, () => {
    setActive(false);
  });

  useEffect(() => {
    if (faux && updatedSelected) {
      if (selectRef?.current) {
        selectRef.current.dispatchEvent(
          new Event('change', { bubbles: true }),
        );
        setUpdatedSelected(false);
      }
    }
  }, [selected, faux, updatedSelected]);

  const options = faux
    ? (children as ReactElement[])
        .filter(child => {
          return child.type !== 'a';
        })
        .map(({ props: { children } }, i) => (
          <option key={i} value={i}>
            {Array.isArray(children)
              ? children.filter(cc => typeof cc === 'string')
              : children}
          </option>
        ))
    : children;

  const popOverChildren = faux && (
    <div>
      {children.map((child, i) => {
        return typeof (child as ReactElement).type === 'string'
          ? child
          : cloneElement(child as ReactElement, {
              onClick: () => {
                setSelected(i);
                setUpdatedSelected(true);
                setActive(false);
              },
              key: i,
              faux,
            });
      })}
    </div>
  );

  return faux ? (
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
        style={{ width, maxWidth: '100%' }}
        content={<div ref={popOverRef}>{popOverChildren}</div>}
        active={active}
      >
        <div
          style={{ position: 'relative' }}
          onClick={() => setActive(true)}
        >
          <SelectStyled
            inputSize={size}
            ref={selectRef}
            format={status || format}
            value={selected.toString()}
            readOnly
            style={{
              ...displayStyles,
              pointerEvents: 'none',
            }}
            {...props}
          >
            {selected} {options}
          </SelectStyled>
          <ChevronDown size={size} />
        </div>
      </PopOver>
    </Wrapper>
  ) : (
    <Wrapper
      className={className}
      id={id}
      label={label}
      messages={messages}
      status={status}
      style={{ ...style }}
    >
      <div style={{ position: 'relative' }}>
        <SelectStyled
          inputSize={size}
          ref={selectRef}
          format={status || format}
          style={style}
          {...props}
        >
          {options}
        </SelectStyled>
        <ChevronDown size={size} />
      </div>
    </Wrapper>
  );
}

type OptionProps = any;

interface Minors {
  Option: FunctionComponent<IrisProps<OptionProps>>;
}

Select.Option = ({
  children,
  faux,
  disabled,
  href,
  upgradeBadge,
  ...props
}) => {
  return faux ? (
    href ? (
      <a href={href}>
        <Pop.Item {...props}>
          <>
            <span style={disabled && { opacity: 0.4 }}>
              {children.filter(c => typeof c === 'string')}
            </span>
            <span style={{ pointerEvents: 'none' }}>
              {children.filter(c => typeof c !== 'string')}
            </span>
          </>
        </Pop.Item>
      </a>
    ) : (
      <Pop.Item
        {...props}
        style={disabled && { pointerEvents: 'none', opacity: 0.4 }}
      >
        {children}
      </Pop.Item>
    )
  ) : (
    <option disabled={disabled} {...props}>
      {children}
    </option>
  );
};

const SelectStyled = styled.select<any>`
  appearance: none;
  ${inputColors};
  ${inputShape};
  padding-right: 2rem;
`;

const ChevronDown = styled(CD)<{ size: Sizes }>`
  position: absolute;
  top: ${p => bottom[p.size]}rem;
  right: 0.3rem;
  width: 1.5rem;
  height: 1.5rem;

  * {
    fill: ${({ theme }) => theme.content.color};
  }
`;

const bottom = {
  xs: 0.1,
  sm: 0.2,
  md: 0.3,
  lg: 0.8,
  xl: 1.1,
};
