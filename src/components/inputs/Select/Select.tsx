import React, {
  ReactNode,
  useRef,
  useLayoutEffect,
  useState,
  cloneElement,
  ReactElement,
  FunctionComponent,
} from 'react';
import styled from 'styled-components';

import { Wrapper } from '../Wrapper/Wrapper';
import { inputShape, inputColors } from '../Shared';

import {
  IrisInputProps,
  geometry,
  withIris,
  IrisProps,
  useLayoutStyles,
} from '../../../utils';
import { ChevronDown as CD } from '../../../icons';
import { PopOver, Pop } from '../../portals/PopOver/PopOver';

type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Props = IrisInputProps<
  {
    defaultValue?: string | string[];
    icon?: ReactNode;
    options?: Array<{ label: string; value: string }>;
    size?: Sizes;
    value?: string | string[];
    format?: 'basic';
    faux?: boolean;
    children?: ReactNode[];
  },
  HTMLSelectElement
>;

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
  label,
  faux,
  style,
  ...props
}: Props) {
  const [width, setWidth] = useState(0);
  const [selected, setSelected] = useState(0);
  const [layoutStyles, displayStyles] = useLayoutStyles(style);
  const ref = useRef(null);

  useLayoutEffect(() => faux && setWidth(geometry(ref).width), [
    size,
    faux,
  ]);

  const options = faux
    ? (children as ReactElement[]).map(
        ({ props: { children } }, i) => (
          <option key={i} value={i}>
            {typeof children === 'string'
              ? children
              : children.filter(cc => typeof cc === 'string')}
          </option>
        ),
      )
    : children;

  const popOverChildren = faux && (
    <div>
      {children.map((child, i) =>
        cloneElement(child as ReactElement, {
          onClick: () => setSelected(i),
          key: i,
          faux,
        }),
      )}
    </div>
  );

  return faux ? (
    <Wrapper
      className={className}
      id={id}
      label={label}
      ref={ref}
      style={{ ...layoutStyles }}
    >
      <PopOver
        attach="bottom"
        style={{ width, maxWidth: '100%' }}
        content={popOverChildren}
      >
        <div style={{ position: 'relative' }}>
          <SelectStyled
            inputSize={size}
            ref={forwardRef}
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
      style={{ ...style }}
    >
      <SelectStyled
        inputSize={size}
        ref={forwardRef}
        format={status || format}
        style={style}
        {...props}
      >
        {options}
      </SelectStyled>
      <ChevronDown size={size} />
    </Wrapper>
  );
}

type OptionProps = any;

interface Minors {
  Option: FunctionComponent<IrisProps<OptionProps>>;
}

Select.Option = ({ children, faux, disabled, ...props }) => {
  return faux ? (
    <Pop.Item
      {...props}
      style={disabled && { pointerEvents: 'none', opacity: 0.4 }}
    >
      {children}
    </Pop.Item>
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
  bottom: ${p => bottom[p.size]}rem;
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
