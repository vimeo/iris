import React, {
  useState,
  useRef,
  useLayoutEffect,
  ReactNode,
} from 'react';

import { InnerButton } from '../InnerButton';
import { Input } from './Input';

import { Eye, EyeOff } from '../../../icons';
import { withIris, IrisInputProps, geometry } from '../../../utils';

export const Password = withIris<HTMLInputElement, Props>(
  PasswordComponent,
);

type Props = IrisInputProps<{
  variant?: 'minimal' | 'basic' | 'minimalTransparent';
  format?: 'primary' | 'basic';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children?: never;
  label?: ReactNode;
  floating?: boolean;
}>;

function PasswordComponent({
  floating,
  format = 'basic',
  label,
  forwardRef,
  size = 'md',
  variant = 'minimalTransparent',
  ...props
}: Props) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => setHeight(geometry(ref).height), []);

  const [type, setType] = useState<'password' | 'text'>('password');
  const toggle = () =>
    setType(type => (type === 'password' ? 'text' : 'password'));

  return (
    <Input
      floating={floating}
      label={label}
      ref={ref}
      size={size}
      type={type}
      {...props}
    >
      <InnerButton
        floating={floating}
        format={format}
        height={height}
        label={label}
        onClick={toggle}
        size={size}
        variant={variant}
      >
        {type === 'password' && <Eye />}
        {type === 'text' && <EyeOff />}
      </InnerButton>
    </Input>
  );
}
