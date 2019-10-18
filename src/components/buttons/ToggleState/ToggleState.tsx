import React, {
  ReactNode,
  CSSProperties,
  useReducer,
  useEffect,
} from 'react';

import { Button } from '../../buttons/Button/Button';
import { IrisProps, withIris } from '../../../utils';
import { reducer, initialState } from './ToggleState.state';

export const ButtonToggleState = withIris<HTMLButtonElement, Props>(
  ButtonToggleStateComponent,
);

type Props = IrisProps<
  {
    autoWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'fluid';
    format?: 'primary';
    variant?: 'outline' | 'basic';
    isActive?: boolean;
    offIcon: ReactNode;
    offStateText: string;
    onIcon: ReactNode;
    onStateText: string;
    style?: { margins?: string };
    turnOffActionText: string;
    turnOffIcon: ReactNode;
  },
  HTMLButtonElement
>;

function ButtonToggleStateComponent({
  autoWidth = 'sm',
  format = 'primary',
  variant = 'outline',
  forwardRef,
  isActive,
  style,

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
