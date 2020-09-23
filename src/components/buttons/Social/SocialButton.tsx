import React, {
  useState,
  useRef,
  useLayoutEffect,
  useImperativeHandle,
} from 'react';

import { Icon, brandThemes } from './SocialButton.style';
import { Button } from '../Button/Button';

import { IrisProps, withIris, geometry } from '../../../utils';

export const SocialButton = withIris<HTMLButtonElement, Props>(
  SocialButtonComponent
);

type Fluid = true | { min?: number; max?: number };

type Props = IrisProps<
  {
    brand: 'apple' | 'facebook' | 'google';
    /**
     * Whether the button will fill the width of its container,
     * can also specify the min, max widths in px of when the button will be fluid
     *
     * Example: {{ min: 250, max: 750 }}
     *
     * [default = false]
     */
    fluid?: Fluid;
  },
  HTMLButtonElement
>;

function SocialButtonComponent({
  brand,
  children,
  forwardRef,
  theme: irisTheme,
  ...props
}: Props) {
  const ref = useRef(null);
  const [size, setSize] = useState(0);
  const theme =
    brandThemes[brand][irisTheme.name] || brandThemes[brand];

  useImperativeHandle(forwardRef, () => ref.current);
  useLayoutEffect(() => setSize(geometry(ref.current).height), []);

  const paddingLeft = size / 2;

  const icon = (
    <Icon brand={brand} size={size} theme={theme}>
      {theme.icon}
    </Icon>
  );

  return (
    <Button ref={ref} theme={theme} size="md" icon={icon} {...props}>
      <span style={{ paddingLeft }}>{children}</span>
    </Button>
  );
}
