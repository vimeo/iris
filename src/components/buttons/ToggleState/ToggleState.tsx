import React, { CSSProperties, useReducer, useEffect } from 'react';

import { Button } from '../../buttons/Button/Button';
import { withIris } from '../../../utils';
import { Props } from './ToggleState.types';
import { reducer, initialState } from './ToggleState.state';

export const ButtonToggleState = withIris<HTMLButtonElement, Props>(
  ButtonToggleStateComponent,
);

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
