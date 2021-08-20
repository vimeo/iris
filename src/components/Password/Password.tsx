import React, {
  useState,
  useRef,
  useLayoutEffect,
  ReactNode,
} from 'react';

import { InnerButton } from '../InnerButton';
import { Input } from '../Input/Input';

import { Eye, EyeOff } from '../../icons';
import { withIris, IrisInputProps, geometry } from '../../utils';

export const Password = withIris<HTMLInputElement, Props>(
  PasswordComponent
);

export type Props = IrisInputProps<{
  /**
   * [default = 'minimalTransparent']
   */
  variant?: 'minimal' | 'basic' | 'minimalTransparent';
  /**
   * [default = 'basic']
   */
  format?: 'primary' | 'basic';
  /**
   * [default = 'md']
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children?: never;
  /**
   * The input label. Appears above the input.
   */
  label?: ReactNode;
  /**
   * Should the label be inside the input and float up on focus?
   *
   * [default = false]
   */
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

  useLayoutEffect(() => setHeight(geometry(ref.current).height), []);

  const [type, setType] = useState<'password' | 'text'>('password');
  const toggle = () =>
    setType((type) => (type === 'password' ? 'text' : 'password'));

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
