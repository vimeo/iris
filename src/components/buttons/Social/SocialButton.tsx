import React, {
  useState,
  useRef,
  useLayoutEffect,
  useImperativeHandle,
} from 'react';

import { Icon, brandThemes } from './SocialButton.style';
import { Button } from '../Button/Button';

import { IrisProps, withIris } from '../../../utils';

export const SocialButton = withIris<HTMLButtonElement, Props>(
  SocialButtonComponent,
);

type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Props = IrisProps<
  {
    brand: 'facebook' | 'google';
    fluid?: true | Sizes;
  },
  HTMLButtonElement
>;

function SocialButtonComponent({
  brand,
  children,
  forwardRef,
  theme: _,
  ...props
}: Props) {
  const ref = useRef(null);
  const [size, setSize] = useState(0);
  const theme = brandThemes[brand];

  useImperativeHandle(forwardRef, () => ref.current);
  useLayoutEffect(
    () => setSize(ref.current.getBoundingClientRect().height),
    [],
  );

  const icon = (
    <Icon brand={brand} size={size} theme={theme}>
      {theme.icon}
    </Icon>
  );

  return (
    <Button ref={ref} theme={theme} size="md" icon={icon} {...props}>
      {children}
    </Button>
  );
}
