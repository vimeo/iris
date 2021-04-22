import React, {
  useRef,
  useState,
  useLayoutEffect,
  useImperativeHandle,
  ReactNode,
} from 'react';

import { InnerButton } from '../InnerButton';
import { Input } from '../Input/Input';

import { Search as SearchIcon } from '../../../icons';
import { withIris, IrisInputProps, geometry } from '../../../utils';

export const Search = withIris<HTMLInputElement, Props>(
  SearchComponent
);

export type Props = IrisInputProps<{
  /**
   * [default = 'basic']
   */
  variant?: 'minimal' | 'basic';
  /**
   * [default = 'primary']
   */
  format?: 'primary' | 'alternative';
  /**
   * [default = 'md']
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  label?: ReactNode;
}>;

function SearchComponent({
  children = <SearchIcon />,
  label,
  size = 'md',
  format = 'primary',
  forwardRef,
  variant = 'basic',
  ...props
}: Props) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useImperativeHandle(forwardRef, () => ref.current);
  useLayoutEffect(() => setHeight(geometry(ref.current).height), []);

  return (
    <Input {...props} size={size} ref={ref} label={label}>
      <InnerButton
        format={format}
        variant={variant}
        label={label}
        size={size}
        height={height}
      >
        {children}
      </InnerButton>
    </Input>
  );
}
