import React, {
  ReactNode,
  CSSProperties,
  useReducer,
  useEffect,
} from 'react';
import { Button } from '../Button/Button';
import { IrisComponent } from '../../../utils';

interface Props {
  autoWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'fluid';
  format?: 'primaryOutline' | 'primary';
  isActive?: boolean;
  offIcon: ReactNode;
  offStateText: string;
  onIcon: ReactNode;
  onStateText: string;
  style?: { margins?: string };
  turnOffActionText: string;
  turnOffIcon: ReactNode;
}

export const ButtonToggleState: IrisComponent<Props> = ({
  autoWidth = 'sm',
  format = 'primaryOutline',
  className,
  offStateText,
  offIcon,
  onStateText,
  onIcon,
  isActive,
  style,
  turnOffActionText,
  turnOffIcon,
  ...buttonProps
}) => {
  const initialState = isActive
    ? {
        children: onStateText,
        format:
          format === 'primaryOutline' ? 'successOutline' : 'success',
        icon: onIcon,
      }
    : {
        children: offStateText,
        format,
        icon: offIcon,
      };

  function reducer(state, action) {
    switch (action) {
      case 'on':
        return {
          ...state,
          children: onStateText,
          format:
            format === 'primaryOutline'
              ? 'successOutline'
              : 'success',
          icon: onIcon,
        };
      case 'off':
        return {
          ...state,
          children: offStateText,
          format,
          icon: offIcon,
        };
      case 'hovering':
        return {
          ...state,
          children: turnOffActionText,
          format: 'secondary',
          icon: turnOffIcon,
        };
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const hover = () => isActive && dispatch('hovering');
  const toggle = () => (isActive ? dispatch('on') : dispatch('off'));
  useEffect(toggle, [isActive]);

  return (
    <Button
      {...buttonProps}
      style={style as CSSProperties}
      icon={state.icon}
      format={state.format}
      children={state.children}
      className={className}
      onMouseEnter={hover}
      onMouseLeave={toggle}
    />
  );
};
