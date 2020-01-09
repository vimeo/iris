import React, {
  ReactNode,
  CSSProperties,
  useReducer,
  useEffect,
} from 'react';

import { Button } from '../../buttons/Button/Button';
import { IrisProps, withIris } from '../../../utils';
import { reducer, initialState } from './ToggleState.state';

type Fluid = true | { min?: number; max?: number };

export const ButtonToggleState = withIris<HTMLButtonElement, Props>(
  ButtonToggleStateComponent,
);

type Props = IrisProps<
  {
    fluid?: Fluid;
    format?: 'primary';
    isActive?: boolean;
    offIcon: ReactNode;
    offStateText: string;
    onIcon: ReactNode;
    onStateText: string;
    style?: { margins?: string };
    turnOffActionText: string;
    turnOffIcon: ReactNode;
    variant?: 'outline' | 'solid';
  },
  HTMLButtonElement
>;

function ButtonToggleStateComponent({
  fluid,
  format = 'primary',
  forwardRef,
  isActive,
  style,
  variant = 'outline',
  ...props
}: Props) {
  const [state, dispatch] = useReducer(
    reducer({ format, ...props }),
    initialState({ format, isActive, ...props }),
  );

  const hover = () => isActive && dispatch('hovering');
  const toggle = () => (isActive ? dispatch('on') : dispatch('off'));

  useEffect(toggle, [isActive]);

  const {
    onIcon,
    onStateText,
    offIcon,
    offStateText,
    ...forwardProps
  } = props;

  return (
    <Button
      children={state.children}
      fluid={fluid}
      format={state.format}
      icon={state.icon}
      onMouseEnter={hover}
      onMouseLeave={toggle}
      ref={forwardRef}
      variant={variant}
      style={style as CSSProperties}
      {...forwardProps}
    />
  );
}
