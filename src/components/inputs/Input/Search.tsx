import React, {
  useRef,
  useState,
  useLayoutEffect,
  ReactNode,
} from 'react';

import { InnerButton } from '../InnerButton';
import { Input } from './Input';

import { Search as SearchIcon } from '../../../icons';
import { withIris, IrisInputProps, geometry } from '../../../utils';

export const Search = withIris<HTMLInputElement, Props>(
  SearchComponent,
);

type Props = IrisInputProps<{
  variant?: 'minimal' | 'basic';
  format?: 'primary' | 'alternative';
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

  useLayoutEffect(() => setHeight(geometry(ref).height), []);

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
